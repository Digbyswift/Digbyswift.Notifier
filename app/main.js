const { app, BrowserWindow, Menu, Tray, screen } = require('electron');
const path = require('node:path');
const { Repository } = require('./api/repository');
const { IntervalReportService } = require('./services/interval-report-service');

let tray = null
let mainWindow = null;

const repository = new Repository();

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

app.on('ready', () => {
    let display = screen.getPrimaryDisplay()
    const intervalReportService = new IntervalReportService(repository, display)

    createWindow()
    createTray()

    
    intervalReportService.initInterval(20000);
    
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