release: pipenv run upgrade || python3 -m flask db upgrade || echo "Skip upgrade if not available"
web: python3 -m gunicorn wsgi:application --chdir ./src/ --bind 0.0.0.0:$PORT || gunicorn wsgi:application --chdir ./src/ --bind 0.0.0.0:$PORT
