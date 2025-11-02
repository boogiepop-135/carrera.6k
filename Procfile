release: python3 -m flask db upgrade || echo "Skipping database upgrade"
web: gunicorn wsgi:application --chdir ./src/ --bind 0.0.0.0:$PORT
