const { BrowserWindow } = require('electron');
const path = require('node:path');

function createMainWindow() {
    let mainWindow = new BrowserWindow({
        width: 600,
        height: 500,
        webPreferences: {
            preload: path.join(__dirname, '../preload.js')
        },
        icon: path.join(__dirname, '../dock-icon.png')
    })

    mainWindow.loadFile('index.html');

    return mainWindow;
}

module.exports = { createMainWindow }