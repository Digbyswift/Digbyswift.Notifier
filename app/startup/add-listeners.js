const { app, ipcMain } = require('electron');

function addListeners(mainWindow, tray){
    ipcMain.on('submitKey', (e, data) => {
        initReporting(data, mainWindow)
        settings.set('api-key', data)
    })

    ipcMain.on('clearApiKey', () => {
        settings.unset('api-key');
    })

    mainWindow.on('close', (event) => {
        if (!app.isQuiting) {
            event.preventDefault();
            mainWindow.hide();
        }
    });

    tray.on('double-click', () => {
        mainWindow.show();
    });
    
    app.on('window-all-closed', (event) => {
        event.preventDefault();
    });

    app.on('before-quit', function () {
        tray.destroy();
    });
}

module.exports = { addListeners };