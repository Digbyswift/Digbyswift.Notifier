import React from 'react';
import ReactDOM from 'react-dom/client';
import MainWindow from '../ui/components/main-window/main-window.jsx';

const App = () => {
    return (
        <MainWindow />
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);