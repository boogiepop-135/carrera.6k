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
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST_DIR = os.path.join(BASE_DIR, "dist")

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
    assets_dir = os.path.join(DIST_DIR, "assets")
    if os.path.isfile(os.path.join(assets_dir, filename)):
        return send_from_directory(assets_dir, filename)
    return jsonify({"error": "Asset not found"}), 404

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
    # Skip API routes - they're handled by blueprint
    if path.startswith("api/"):
        return jsonify({"error": "API endpoint not found"}), 404
    
    # In production, serve built React app
    index_path = os.path.join(DIST_DIR, "index.html")
    
    if os.path.isfile(index_path):
        return send_from_directory(DIST_DIR, "index.html")
    
    # If index.html doesn't exist, return helpful error
    return jsonify({
        "error": "React app not built",
        "message": "Please run 'npm run build' to build the frontend",
        "dist_dir": DIST_DIR,
        "exists": os.path.exists(DIST_DIR)
    }), 503

# Run development server
if __name__ == "__main__":
    PORT = int(os.environ.get("PORT", 3001))
    app.run(host="0.0.0.0", port=PORT, debug=DEBUG)
