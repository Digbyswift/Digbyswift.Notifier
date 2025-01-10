const { createMainWindow } = require('./create-main-window');
const { createTray } = require('./create-tray');
const { initReporting } = require('./init-reporting');
const { addListeners } = require('./add-listeners');

module.exports = { createMainWindow, createTray, initReporting, addListeners };