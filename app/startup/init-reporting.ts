import { BrowserWindow, Display, screen } from 'electron';
import Repository from '../infrastructure/api/repository';
import IntervalReportService from '../infrastructure/services/interval-report-service';

export default  function initReporting(key : string, mainWindow : BrowserWindow) {
    let display : Display = screen.getPrimaryDisplay()
    const repository = new Repository(key);
    const intervalReportService = new IntervalReportService(repository, display, mainWindow)

    intervalReportService.runCheckAndNotify();
    intervalReportService.initInterval(20000);
}