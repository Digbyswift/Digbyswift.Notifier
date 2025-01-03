const { BrowserWindow, ipcMain} = require('electron');
const path = require('node:path');

function createNotificationWindow(screenWidth) {
    const win = new BrowserWindow({
        width: 400,
        height: 300,
        y: 0,
        x: screenWidth - 400,
        webPreferences: {
            preload: path.join(__dirname, '../preload.js')
        }
    })

    win.loadFile('./ui/alert/alert.html');
    return win;
}

module.exports = { createNotificationWindow }