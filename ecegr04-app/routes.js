const router = require('express').Router();

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
  res.send(content)
});

router.get('/hello', (req, res) => {
  if ('name' in req.query) {
    if (req.query['name'].toLowerCase() === 'david') {
      res.send('Hello! My name is David Ramirez. This is Lab3')
    } else {
      res.send(`Hello ${req.query['name']}!`)
    }
  } else {
    res.send('Hello anonymous!')
  }
});

router.get('*', (req, res) => {
  try {
    const data = require(`../content/${req.url}.json`);
    res.json(data);
  } catch (err) {
    res.status(404).send("Error 404! The page doesn't exist.")
  }
});

module.exports = router;
