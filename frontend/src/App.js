import React from 'react';
import FileUpload from './components/FileUpload';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <div className="App">
            <h1>Excel para PostgreSQL</h1>
            <FileUpload />
            <Dashboard />
        </div>
    );
}

export default App;
