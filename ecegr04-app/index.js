// Import modules
const express = require('express')
const router = require('./routes')

const app = express()
const port = 8080

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})