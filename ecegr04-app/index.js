const express = require('express');
const app = express();
const router = require('./router'); // Renamed from 'handles' to 'router'

app.use('/', router);

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
