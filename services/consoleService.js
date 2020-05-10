'use strict';

const consoleClient = require('../clients/consoleClient');

class ConsoleService {
    constructor() {
    }

    executeRequest(token) {
        return consoleClient.executeRequest(token);
    }
}
const consoleService = new ConsoleService();

module.exports = consoleService;    