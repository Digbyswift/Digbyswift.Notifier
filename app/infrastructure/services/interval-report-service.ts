import generateDowntimeReport from '../status-reports/generate-downtime-report';
import createNotificationWindow from '../notifications/create-notification-window';
import generateStatusReport from '../status-reports/generate-status-report';
import Repository from '../api/repository';
import { BrowserWindow, Display } from 'electron';

export default class IntervalReportService {
    alertWindow : BrowserWindow; 
    downMonitors : any[] | undefined = [];
    repository;
    display : Display;
    mainWindow;
    
    constructor(repository : Repository, display : Display, mainWindow : BrowserWindow){
        this.mainWindow = mainWindow;
        this.repository = repository;
        this.display = display;
        this.runCheckAndNotify = this.runCheckAndNotify.bind(this);
    }

    async runCheckAndNotify() {
        let monitors = await this.repository.fetchMonitors();
        this.downMonitors = await this.repository.getDownMonitors();
        
        if (this.downMonitors?.length != 0 && (this.alertWindow == null || this.alertWindow.isDestroyed())) {
            this.alertWindow = createNotificationWindow(this.display.bounds.width);
            this.alertWindow.on(('ready-to-show'), () => {
                this.alertWindow.webContents.send('downtime-report', generateDowntimeReport(this.downMonitors!))
            })
        }

        this.mainWindow.webContents.send('status-report', generateStatusReport(monitors))
    }

    initInterval(duration : number) {
        setInterval(() => {
            this.runCheckAndNotify();
            if (this.downMonitors?.length != 0 && this.alertWindow != null && !this.alertWindow.isDestroyed()) {
                this.alertWindow.show();
                this.alertWindow.webContents.send('downtime-report', generateDowntimeReport(this.downMonitors!))
            }
        }, duration);
    }

}