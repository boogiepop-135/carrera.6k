#!/bin/bash
set -e

echo "Installing Node.js dependencies..."
npm install

echo "Building frontend..."
npm run build

echo "Installing Python dependencies..."
pip install --upgrade pip
pip install -r requirements.txt

echo "Build completed successfully!"

