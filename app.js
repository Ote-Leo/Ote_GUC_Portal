const express = require('express');
const app = express();

app.use('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('WELCOME TO GUC PORTAL BACK-END DEMO');
});

module.exports.app = app;
