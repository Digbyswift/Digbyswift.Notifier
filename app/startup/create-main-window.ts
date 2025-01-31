const { BrowserWindow } = require('electron');
const path = require('node:path');

export default function createMainWindow() {
    let mainWindow = new BrowserWindow({
        width: 750,
        height: 500,
        webPreferences: {
            preload: path.join(__dirname, '../preload/preload.js'),
            nodeIntegration: true,
            contextIsolation: true,
        },
        icon: path.join(__dirname, '../dock-icon.png')
    })

    const startUrl = `file://${path.join('../dist/index.html')}`;

    mainWindow.loadFile(startUrl);

    return mainWindow;
}
