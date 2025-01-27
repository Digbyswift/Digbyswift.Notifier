const { BrowserWindow } = require('electron');
const path = require('node:path');

function createMainWindow(app) {
    let mainWindow = new BrowserWindow({
        width: 750,
        height: 500,
        webPreferences: {
            preload: path.join(__dirname, '../preload.js'),
            nodeIntegration: true,
            contextIsolation: true,
            enableRemoteModule: false,
            sandbox: true,
        },
        icon: path.join(__dirname, '../dock-icon.png')
    })

    const startUrl = `file://${path.join('../dist/index.html')}`;

    mainWindow.loadFile(startUrl);

    return mainWindow;
}

module.exports = { createMainWindow }