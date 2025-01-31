import React from 'react';
import ReactDOM from 'react-dom/client';
import AlertWindow from '../ui/components/alert-window/alert-window';

const App = () => {
    return <AlertWindow/>
};

const rootElement = document.getElementById('root');

if(rootElement){
    let root = ReactDOM.createRoot(rootElement)
    root.render(<App />);
}

