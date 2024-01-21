from flask import Flask, jsonify, request
from flask_cors import CORS  # Import CORS
from mongo_utils.getDatabase import get_database
from pandas import DataFrame
from bson import ObjectId
from blueprints.template import template_blueprint
from blueprints.backend import backend_template
import json

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

app.register_blueprint(template_blueprint, url_prefix='/api')
app.register_blueprint(backend_template, url_prefix='/backend')


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)