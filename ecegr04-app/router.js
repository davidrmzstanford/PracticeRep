const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Root route
router.get('/', (req, res) => {
    const content = '<!DOCTYPE html>' +
    '<html>' +
    '    <head>' +
    '        <meta charset="utf-8" />' +
    '        <title>WebTechnologies Lab3</title>' +
    '    </head>' + 
    '    <body>' +
    '       <h1>WebTech Lab3</h1>' + 
    '       <h2>/hello tutorial</h2>' +
    '       <ul>' +
    '           <li>To greet an anonymous person: /hello</li>' +
    '           <li>Add name for a personalized greeting. For example, "/hello?name=David"</li>' +
    '           <li>"/hello?name=David" for information about a person </li>' +
    '           <li>Info about creator: "/about"</li>' +
    '       </ul>' +
    '    </body>' +
    '</html>'
    res.send(content);
});

// Hello route
router.get('/hello', (req, res) => {
    const name = req.query.name;
    if (name === 'David') {
        res.send('Hello! My name is David Ramirez. This is Lab3');
    } else if (name) {
        res.send(`Hello ${name}!`);
    } else {
        res.send('Hello anonymous!');
    }
});

// Catch-all for JSON file serving or 404
router.get('*', (req, res) => {
    const jsonFilePath = path.join(__dirname, 'content', req.path.substr(1) + '.json');
    if (fs.existsSync(jsonFilePath)) {
        const jsonData = require(jsonFilePath);
        res.status(200).type('text/html').send('<pre>' + JSON.stringify(jsonData, null, 4) + '</pre>');
    } else {
        res.status(404).type('text/plain').send('404 error. Not found message.');
    }
});

module.exports = router;
