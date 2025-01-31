const { BrowserWindow } = require('electron');
const path = require('node:path');

export default function createNotificationWindow(screenWidth : number) {
    const win = new BrowserWindow({
        width: 450,
        height: 350,
        y: 0,
        x: screenWidth - 450,
        webPreferences: {
            preload: path.join(__dirname, '../../preload/alert-preload.js'),
            nodeIntegration: true,
            contextIsolation: true,
        }
    })

    win.loadFile(`file://${path.join('../dist/alert.html')}`);
    return win;
}