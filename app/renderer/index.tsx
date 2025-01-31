import React from 'react';
import ReactDOM from 'react-dom/client';
import MainWindow from '../ui/components/main-window/main-window';

const App = () => {
    return (
        <MainWindow />
    )
};

const rootElement = document.getElementById('root');

if(rootElement){
    let root = ReactDOM.createRoot(rootElement)
    root.render(<App />);
}
