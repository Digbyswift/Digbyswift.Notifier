const { app, Menu } = require('electron');
const settings = require('electron-settings')
const { createMainWindow, createTray, initReporting, addListeners } = require('./startup/startup');

let tray = null
let mainWindow = null;

app.on('ready', () => {
    mainWindow = createMainWindow(app);
    tray = createTray(mainWindow);

    if (app.isPackaged) {
        Menu.setApplicationMenu(null);
    }

    addListeners(mainWindow, tray);
    
    if(app.isPackaged){
        app.setLoginItemSettings({
            openAtLogin: true
        });
    }

    mainWindow.on('ready-to-show', () => {
        settings.get('api-key')
        .then((res) => {
            if (res) {
                initReporting(res, mainWindow)
            } else {
                mainWindow.webContents.send('no-key');
            }
        })
    })

})
