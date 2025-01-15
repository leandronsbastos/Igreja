import React from 'react';
import Plot from 'react-plotly.js';

function Dashboard() {
    // Exemplo de gráfico (dados estáticos por enquanto)
    const data = [
        {
            x: ['Categoria A', 'Categoria B', 'Categoria C'],
            y: [20, 14, 23],
            type: 'bar',
        },
    ];

    return (
        <div>
            <h2>Gráficos Dinâmicos</h2>
            <Plot data={data} layout={{ title: 'Exemplo de Gráfico' }} />
        </div>
    );
}

export default Dashboard;