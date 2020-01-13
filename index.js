const express = require('express');
const http = require('http');
const config = require('./config');

const app = express();
app.server = http.createServer();

//
//  API routes V1
//
app.get('/api/v1/destination', (req, res) => {
    res.send({
        status: 'OKAY',
        outcome: 'The quick brown fox jumped over the lazy dog'
    });
});

app.listen(config.serverPort, () => {
    console.log(`Server listening at PORT ${config.serverPort}`);
});