## Arquivo: app/__init__.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from routes import register_routes

# Instância do banco de dados
db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object("config.Config")
    db.init_app(app)
    register_routes(app)
    return app