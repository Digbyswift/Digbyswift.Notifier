const { generateDowntimeReport } = require('../notifications/generate-downtime-report');
const { createNotificationWindow } = require('../notifications/create-notification-window');
const Repository = require('../api/repository');

class IntervalReportService {
    alertWindow = null; 
    downMonitors = [];
    repository;
    display;
    
    constructor(display){
        this.repository = new Repository();
        this.display = display;
        this.runCheckAndNotify = this.runCheckAndNotify.bind(this);
    }

    async runCheckAndNotify() {
        this.downMonitors = await this.repository.getDownMonitors();
        if (this.downMonitors.length != 0 && (this.alertWindow == null || this.alertWindow.isDestroyed())) {
            this.alertWindow = createNotificationWindow(this.display.bounds.width);
            this.alertWindow.once(('ready-to-show'), () => {
                this.alertWindow.webContents.send('downtime-report', generateDowntimeReport(this.downMonitors))
            })
        }
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