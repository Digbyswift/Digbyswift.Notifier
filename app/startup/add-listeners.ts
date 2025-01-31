import { BrowserWindow, Tray } from "electron";

const { app, ipcMain } = require('electron');
const settings = require('electron-settings');
const { initReporting } = require('./init-reporting');

export default function addListeners(mainWindow : BrowserWindow, tray : Tray){
    ipcMain.on('submitKey', (e, data) => {
        initReporting(data, mainWindow)
        settings.set('api-key', data)
    })

    ipcMain.on('clearApiKey', () => {
        settings.unset('api-key');
    })

    mainWindow.on('close', (event) => {
            mainWindow.hide();
    });

    tray.on('double-click', () => {
        mainWindow.show();
    });
    
    // app.on('window-all-closed', (event) => {
    //     event.preventDefault();
    // });

    app.on('before-quit', function () {
        tray.destroy();
    });
}
