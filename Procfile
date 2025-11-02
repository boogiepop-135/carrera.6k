release: pipenv run upgrade || echo "Skip upgrade if pipenv not available"
web: gunicorn wsgi:application --chdir ./src/ --bind 0.0.0.0:$PORT
