import pandas as pd
from sqlalchemy import create_engine

from models import UploadedFile
from app import db

def process_excel(file, table_name, header_row):
    # Carregar planilha
    df = pd.read_excel(file, header=header_row)

    # Remover espaços em branco dos nomes das colunas
    df.columns = [col.strip() for col in df.columns]

    # Determinar tipos de dados e criar tabela dinamicamente
    engine = create_engine(db.engine.url)
    df.to_sql(table_name, engine, if_exists='replace', index=False)

    # Registrar upload no banco
    upload_record = UploadedFile(filename=file.filename)
    db.session.add(upload_record)
    db.session.commit()
