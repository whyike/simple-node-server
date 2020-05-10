'use strict';
const https = require('https');


class ConsoleClient {
    constructor() {
    }

    executeRequest(token) {
        return "HI MIKE!";
    }
}

const consoleClient = new ConsoleClient();

module.exports = consoleClient;