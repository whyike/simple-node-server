'use strict';

const Router = require('express');
const consoleService = require('../services/consoleService');

const getConsoleRoutes = (app) => {
    const router = new Router();

    router
        .get('/', (req, res) => {
            const body = req.body;
            const token = body.token;

            const result = consoleService.executeRequest(token);
            res.send(result);
        })


    app.use('/console', router);
};

module.exports = getConsoleRoutes;