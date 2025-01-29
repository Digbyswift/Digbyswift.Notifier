const { BrowserWindow } = require('electron');
const path = require('node:path');

function createNotificationWindow(screenWidth) {
    const win = new BrowserWindow({
        width: 450,
        height: 350,
        y: 0,
        x: screenWidth - 450,
        webPreferences: {
            preload: path.join(__dirname, '../../preload.js'),
            nodeIntegration: true,
            contextIsolation: true,
            enableRemoteModule: false,
        }
    })

    win.loadFile(`file://${path.join('../dist/alert.html')}`);
    return win;
}

module.exports = { createNotificationWindow }