"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from api.utils import APIException, generate_sitemap
from api.models import db
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands

# from models import Person

ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(os.path.dirname(
    os.path.realpath(__file__)), '../dist/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace(
        "postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object


@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints


# Serve static files (CSS, JS, images, etc.) - MUST be before generic route
@app.route('/assets/<path:filename>')
def serve_static_files(filename):
    file_path = os.path.join(static_file_dir, 'assets', filename)
    if os.path.isfile(file_path):
        response = send_from_directory(os.path.join(static_file_dir, 'assets'), filename)
        # Set appropriate cache headers for static assets
        response.cache_control.max_age = 3600
        return response
    # If file doesn't exist, return 404
    return jsonify({"error": "File not found"}), 404

# Serve root-level static files (like favicon)
@app.route('/4geeks.ico')
def serve_favicon():
    file_path = os.path.join(static_file_dir, '4geeks.ico')
    if os.path.isfile(file_path):
        return send_from_directory(static_file_dir, '4geeks.ico')
    # Fallback: try from public directory if it exists
    public_icon = os.path.join(os.path.dirname(os.path.dirname(os.path.realpath(__file__))), 'public', '4geeks.ico')
    if os.path.isfile(public_icon):
        return send_from_directory(os.path.dirname(public_icon), '4geeks.ico')
    return jsonify({"error": "Favicon not found"}), 404

@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    
    # Debug: log the static file directory
    print(f"Static file directory: {static_file_dir}")
    print(f"Directory exists: {os.path.exists(static_file_dir)}")
    if os.path.exists(static_file_dir):
        print(f"Files in dist: {os.listdir(static_file_dir)}")
    
    index_path = os.path.join(static_file_dir, 'index.html')
    if os.path.isfile(index_path):
        return send_from_directory(static_file_dir, 'index.html')
    else:
        # Return error if index.html doesn't exist
        return jsonify({
            "error": "index.html not found",
            "static_dir": static_file_dir,
            "exists": os.path.exists(static_file_dir),
            "files": os.listdir(static_file_dir) if os.path.exists(static_file_dir) else []
        }), 500

# any other endpoint will try to serve it like a static file or fallback to index.html
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    # Skip API routes - these are handled by the blueprint
    if path.startswith('api/'):
        return jsonify({"error": "API endpoint not found"}), 404
    
    file_path = os.path.join(static_file_dir, path)
    
    # If it's a file, serve it
    if os.path.isfile(file_path):
        response = send_from_directory(static_file_dir, path)
        response.cache_control.max_age = 3600  # Cache static files
        return response
    
    # For SPA routes, always return index.html
    return send_from_directory(static_file_dir, 'index.html')


# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
