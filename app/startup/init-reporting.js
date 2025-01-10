const { screen } = require('electron');
const { Repository } = require('../infrastructure/api/repository');
const { IntervalReportService } = require('../infrastructure/services/interval-report-service');

function initReporting(key, mainWindow) {
    let display = screen.getPrimaryDisplay()
    const repository = new Repository(key);
    const intervalReportService = new IntervalReportService(repository, display, mainWindow)

    intervalReportService.runCheckAndNotify();
    intervalReportService.initInterval(20000);
}

module.exports = { initReporting };