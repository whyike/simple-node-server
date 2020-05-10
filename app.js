'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');
const app = new express();

// register JSON parser middlewear
app.use(bodyParser.json());

require('./routes/consoleRoutes')(app);
require('./routes/versionRoutes')(app, config);

app.listen(3000, () => {
    console.log("Server is up!");
});