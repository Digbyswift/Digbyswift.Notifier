const axios = require('axios');

class Repository {
    path = 'https://api.uptimerobot.com/v2/getMonitors?api_key=';
    apiKey;

    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async fetchMonitors() {
        let response = null;

        try {
            response = await axios.post(`${this.path}${this.apiKey}`)
        } catch (exception) {
            console.log(exception)
        }

        return response.data.monitors;
    }

    async getDownMonitors() {
        try {
            const monitors = await this.fetchMonitors();
            const downMonitors = [];

            for (let i = 0; i < monitors.length; i++) {
                const monitor = monitors[i];
                switch(monitor['status']){
                    case 8:
                        downMonitors.push(monitor);
                        break;
                    case 9:
                        downMonitors.push(monitor);
                        break;
                }
            }

            return downMonitors;

        } catch (exception) {
            console.log(exception)
        }

    }
}

module.exports = { Repository }