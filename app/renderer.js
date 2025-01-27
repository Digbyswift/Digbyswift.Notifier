const reportElement = document.getElementById('report-details');
const apiKeyForm = document.getElementById('api-form');
const reportingMessage = document.getElementById('reporting-message');
const clearButton = document.getElementById('clear-button');
const recentStatus = document.getElementById('recent-status');

function showNotification(title, body){
    new window.Notification(title, { body: body, icon: "tray-icon.png" });
    window.electronAPI.showNotification("notification shown");
}
