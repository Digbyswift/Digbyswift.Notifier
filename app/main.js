const { app, BrowserWindow, Menu, Tray, screen, ipcMain } = require('electron');
const path = require('node:path');
const { Repository } = require('./api/repository');
const { IntervalReportService } = require('./services/interval-report-service');

let tray = null
let mainWindow = null;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 600,
        height: 400,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    mainWindow.loadFile('index.html');
}

function createTray() {
    tray = new Tray('tray-icon.png')
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
                app.quit()
            }
        }
    ])
    tray.setToolTip('Digbyswift Notifier')
    tray.setContextMenu(contextMenu)
}

function initReporting(key){
    let display = screen.getPrimaryDisplay()
    const repository = new Repository(key);
    const intervalReportService = new IntervalReportService(repository, display)

    intervalReportService.initInterval(20000);
}

app.on('ready', () => {
    ipcMain.on('submitKey', (e, data) => initReporting(data))

    createWindow()
    createTray()
    
    mainWindow.on('close', (event) => {
        if (!app.isQuiting) {
            event.preventDefault();
            mainWindow.hide();
        }
    });

    tray.on('double-click', () => {
        mainWindow.show();
    });
})

app.on('window-all-closed', (event) => {
    event.preventDefault();
});