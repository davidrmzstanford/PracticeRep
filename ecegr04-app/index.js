const express = require('express');
const app = express();
const articlesRouter = require('./articles');
const commentsRouter = require('./comments');

app.use(express.json());

app.use('/articles', articlesRouter);
app.use('/articles/:articleId/comments', commentsRouter);

const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
