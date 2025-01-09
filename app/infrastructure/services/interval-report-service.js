const { generateDowntimeReport } = require('../status-reports/generate-downtime-report');
const { createNotificationWindow } = require('../notifications/create-notification-window');
const { generateStatusReport } = require('../status-reports/generate-status-report');

class IntervalReportService {
    alertWindow = null; 
    downMonitors = [];
    repository;
    display;
    mainWindow;
    
    constructor(repository, display, mainWindow){
        this.mainWindow = mainWindow;
        this.repository = repository;
        this.display = display;
        this.runCheckAndNotify = this.runCheckAndNotify.bind(this);
    }

    async runCheckAndNotify() {
        let monitors = await this.repository.fetchMonitors();
        this.downMonitors = await this.repository.getDownMonitors();
        
        if (this.downMonitors.length != 0 && (this.alertWindow == null || this.alertWindow.isDestroyed())) {
            this.alertWindow = createNotificationWindow(this.display.bounds.width);
            this.alertWindow.on(('ready-to-show'), () => {
                this.alertWindow.webContents.send('downtime-report', generateDowntimeReport(this.downMonitors))
            })
        }

        this.mainWindow.webContents.send('status-report', generateStatusReport(monitors))
    }

    initInterval(duration) {
        setInterval(() => {
            this.runCheckAndNotify();
            if (this.downMonitors.length != 0 && this.alertWindow != null && !this.alertWindow.isDestroyed()) {
                this.alertWindow.show();
                this.alertWindow.webContents.send('downtime-report', generateDowntimeReport(this.downMonitors))
            }
        }, duration);
    }

}

module.exports = { IntervalReportService }