import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
    const [file, setFile] = useState(null);
    const [tableName, setTableName] = useState('');
    const [headerRow, setHeaderRow] = useState(0);

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('table_name', tableName);
        formData.append('header_row', headerRow);

        try {
            const response = await axios.post('/api/upload', formData);
            alert(response.data.message);
        } catch (err) {
            alert(err.response?.data?.error || 'Erro no upload');
        }
    };

    return (
        <div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <input
                type="text"
                placeholder="Nome da Tabela"
                value={tableName}
                onChange={(e) => setTableName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Linha do Cabeçalho"
                value={headerRow}
                onChange={(e) => setHeaderRow(e.target.value)}
            />
            <button onClick={handleUpload}>Enviar</button>
        </div>
    );
}

export default FileUpload;