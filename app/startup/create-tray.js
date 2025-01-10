const { app, Menu, Tray } = require('electron');

function createTray(mainWindow) {
    const resourcesDir = app.isPackaged ? process.resourcesPath : './extraResources';

    tray = new Tray(`${resourcesDir}/tray-icon.png`)
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Open',
            click: async () => {
                if (mainWindow) {
                    mainWindow.show();
                }
            },
        },
        {
            label: 'Exit',
            click: async () => {
                mainWindow.removeAllListeners('close');
                app.quit()
            }
        }
    ])

    tray.setToolTip('Digbyswift Notifier')
    tray.setContextMenu(contextMenu)

    return tray;
}

module.exports = { createTray };