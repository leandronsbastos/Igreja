from flask import Blueprint, request, jsonify
from services import process_excel
from models import UploadedFile
import os

api = Blueprint('api', __name__)


def register_routes(app):
    app.register_blueprint(api, url_prefix='/api')

@api.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    table_name = request.form['table_name']
    header_row = int(request.form.get('header_row', 0))

    # Verificar se o arquivo já foi enviado
    if UploadedFile.query.filter_by(filename=file.filename).first():
        return jsonify({"error": "Arquivo já foi enviado."}), 400

    # Processar o arquivo Excel
    try:
        process_excel(file, table_name, header_row)
        return jsonify({"message": "Arquivo processado com sucesso."})
    except Exception as e:
        return jsonify({"error": str(e)}), 500