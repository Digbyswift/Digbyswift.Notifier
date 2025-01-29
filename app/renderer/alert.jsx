import React from 'react';
import ReactDOM from 'react-dom/client';
import AlertWindow from '../ui/components/alert-window/alert-window';

const App = () => {
    return <AlertWindow/>
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);