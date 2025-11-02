"""
Flask application for San Cosme Orgánico
Serves React frontend and API endpoints
"""
import os
from flask import Flask, send_from_directory, jsonify
from flask_migrate import Migrate
from flask_cors import CORS
from api.utils import APIException
from api.models import db
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands

# Configuration
ENV = os.getenv("FLASK_ENV", "production")
DEBUG = os.getenv("FLASK_DEBUG", "0") == "1"

# Paths - works from any directory
# When running with gunicorn from src/, __file__ is src/app.py
# So we need to go up one level to get to project root
_current_file = os.path.abspath(__file__)
_current_dir = os.path.dirname(_current_file)
BASE_DIR = os.path.dirname(_current_dir)  # Go up from src/ to project root
DIST_DIR = os.path.join(BASE_DIR, "dist")

# Debug path information
print(f"DEBUG: __file__ = {__file__}")
print(f"DEBUG: _current_file = {_current_file}")
print(f"DEBUG: _current_dir = {_current_dir}")
print(f"DEBUG: BASE_DIR = {BASE_DIR}")
print(f"DEBUG: DIST_DIR = {DIST_DIR}")
print(f"DEBUG: cwd = {os.getcwd()}")
print(f"DEBUG: dist exists = {os.path.exists(DIST_DIR)}")

# Initialize Flask app
app = Flask(__name__)
app.url_map.strict_slashes = False

# CORS
CORS(app)

# Database configuration
DATABASE_URL = os.getenv("DATABASE_URL")
if DATABASE_URL:
    app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE_URL.replace("postgres://", "postgresql://")
else:
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:////tmp/test.db"

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Initialize database
try:
    db.init_app(app)
    Migrate(app, db, compare_type=True)
except Exception as e:
    print(f"Warning: Database initialization issue: {e}")
    # App will still run but database may not work

# Setup admin and commands (wrap in try-except to prevent crashes)
try:
    setup_admin(app)
except Exception as e:
    print(f"Warning: Admin setup failed: {e}")
    # Continue without admin if it fails

try:
    setup_commands(app)
except Exception as e:
    print(f"Warning: Commands setup failed: {e}")
    # Continue without commands if it fails

# Register API blueprint
app.register_blueprint(api, url_prefix="/api")

# Diagnostic endpoint for debugging
@app.route("/api/debug")
def debug_info():
    """Debug endpoint to check application state"""
    try:
        return jsonify({
            "status": "ok",
            "dist_dir": DIST_DIR,
            "dist_exists": os.path.exists(DIST_DIR),
            "base_dir": BASE_DIR,
            "current_working_dir": os.getcwd(),
            "dist_contents": os.listdir(DIST_DIR) if os.path.exists(DIST_DIR) else [],
            "index_exists": os.path.isfile(os.path.join(DIST_DIR, "index.html")) if DIST_DIR else False
        })
    except Exception as e:
        return jsonify({
            "status": "error",
            "error": str(e)
        }), 500

# Error handlers
@app.errorhandler(APIException)
def handle_api_exception(error):
    return jsonify(error.to_dict()), error.status_code

@app.errorhandler(404)
def handle_404(error):
    if os.path.exists(DIST_DIR):
        return send_from_directory(DIST_DIR, "index.html")
    return jsonify({"error": "Not found"}), 404

# Serve static assets (CSS, JS, images) - MUST come before catch-all route
@app.route("/assets/<path:filename>")
def serve_assets(filename):
    """Serve static assets from dist/assets/"""
    try:
        assets_dir = os.path.join(DIST_DIR, "assets")
        file_path = os.path.join(assets_dir, filename)
        if os.path.isfile(file_path):
            return send_from_directory(assets_dir, filename)
        return jsonify({"error": "Asset not found", "filename": filename}), 404
    except Exception as e:
        print(f"Error serving asset {filename}: {e}")
        return jsonify({"error": "Internal server error", "message": str(e)}), 500

# Serve favicon
@app.route("/favicon.ico")
@app.route("/4geeks.ico")
def serve_favicon():
    """Serve favicon"""
    favicon_path = os.path.join(DIST_DIR, "4geeks.ico")
    if os.path.isfile(favicon_path):
        return send_from_directory(DIST_DIR, "4geeks.ico")
    # Try public directory as fallback
    public_favicon = os.path.join(BASE_DIR, "public", "4geeks.ico")
    if os.path.isfile(public_favicon):
        return send_from_directory(os.path.dirname(public_favicon), "4geeks.ico")
    return "", 404

# Serve React app - catch-all for SPA routing (but NOT /api routes)
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_react_app(path):
    """
    Serve React application.
    For production: serve index.html from dist/
    For development: would typically use Vite dev server
    """
    try:
        # Skip API routes - they're handled by blueprint
        if path.startswith("api/"):
            return jsonify({"error": "API endpoint not found"}), 404
        
        # In production, serve built React app
        index_path = os.path.join(DIST_DIR, "index.html")
        
        if os.path.isfile(index_path):
            return send_from_directory(DIST_DIR, "index.html")
        
        # If index.html doesn't exist, return helpful error with more info
        parent_dir = os.path.dirname(DIST_DIR)
        dist_contents = []
        parent_contents = []
        
        if os.path.exists(parent_dir):
            try:
                parent_contents = os.listdir(parent_dir)
            except Exception as e:
                print(f"Error listing parent dir: {e}")
        
        if os.path.exists(DIST_DIR):
            try:
                dist_contents = os.listdir(DIST_DIR)
            except Exception as e:
                print(f"Error listing dist dir: {e}")
        
        return jsonify({
            "error": "React app not built",
            "message": "Please run 'npm run build' to build the frontend",
            "dist_dir": DIST_DIR,
            "dist_exists": os.path.exists(DIST_DIR),
            "dist_contents": dist_contents,
            "parent_dir": parent_dir,
            "parent_contents": parent_contents,
            "current_working_dir": os.getcwd()
        }), 503
    
    except Exception as e:
        # Log the error for debugging
        print(f"Error in serve_react_app: {e}")
        import traceback
        traceback.print_exc()
        return jsonify({
            "error": "Internal server error",
            "message": str(e),
            "dist_dir": DIST_DIR,
            "dist_exists": os.path.exists(DIST_DIR) if DIST_DIR else False
        }), 500

# Run development server
if __name__ == "__main__":
    PORT = int(os.environ.get("PORT", 3001))
    app.run(host="0.0.0.0", port=PORT, debug=DEBUG)
