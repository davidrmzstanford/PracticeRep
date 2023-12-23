
const url = require('url');
const qs = require('querystring');
const fs = require('fs');
const path = require('path');

module.exports = {
  serverHandle: function (req, res) {
    const route = url.parse(req.url);
    const requestPath = route.pathname;
    const params = qs.parse(route.query);

    if (requestPath === '/') {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('Hello, welcome to this test!  </p>');
      res.write('<p>Instructions to use the /hello route: </p>');
      res.write('<a href="/hello?name=John">/hello?name=John</a>');
    } else if (requestPath === '/hello' && 'name' in params) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      if (params['name'] === 'David') {
        res.write('Hello, I am David and I come from Mexico! I created this :).');
      } else {
        res.write('Hello ' + params['name']);
      }
    } else {
      const jsonFilePath = path.join(__dirname, 'content', requestPath.substr(1) + '.json');
      if (fs.existsSync(jsonFilePath)) {
        const jsonData = require(jsonFilePath);
        res.writeHead(200, {'Content-Type': 'text/html'});
        // Format JSON and wrap in <pre> tag
        res.write('<pre>' + JSON.stringify(jsonData, null, 4) + '</pre>');
      } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('404 error. Not found message.');
      }
    }

    res.end();
  } 
}