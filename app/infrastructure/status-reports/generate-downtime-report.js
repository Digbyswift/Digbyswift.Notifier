function generateDowntimeReport(monitors){
    if(!Array.isArray(monitors)){
        return "";
    }
    
    let reportHtml = [`<h3>Sites Down:${monitors.length}</h3>`]

    for(let i = 0; i < monitors.length; i++){
        const monitor = monitors[i];
        let title = monitor['friendly_name'];
        reportHtml.push(`<h4 className="down-report-listing">- ${title}</h4>`)
    }

    return reportHtml.join("");
}

module.exports = { generateDowntimeReport }