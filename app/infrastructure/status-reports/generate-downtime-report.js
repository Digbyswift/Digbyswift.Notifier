function generateDowntimeReport(monitors){
    if(!Array.isArray(monitors)){
        return "";
    }
    
    let reportHtml = [`<h2>Sites Down:${monitors.length}</h2>`]

    for(let i = 0; i < monitors.length; i++){
        const monitor = monitors[i];
        let title = monitor['friendly_name'];
        reportHtml.push(`<h3>Site: ${title}</h3>`)
        reportHtml.push(`Time: ${(new Date()).toISOString()}`)
    }

    return reportHtml.join("");
}

module.exports = { generateDowntimeReport }