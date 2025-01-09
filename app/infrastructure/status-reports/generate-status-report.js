function generateStatusReport(monitors){
    if(!Array.isArray(monitors)){
        return "";
    }
    
    let reportHtml = [`<h4>Last Checked: ${new Date().toString()}</h4>`]
    let downMonitors = 0;

    for(let i = 0; i < monitors.length; i++){
        let monitor = monitors[i];
        switch(monitor['status']){
            case 8:
                downMonitors++;
                break;
            case 9:
                downMonitors++;
                break;
        }
    }
    
    reportHtml.push(`<h5>Sites down: <strong>${downMonitors}</strong></h5>`)

    return reportHtml.join("");
}

module.exports = { generateStatusReport }