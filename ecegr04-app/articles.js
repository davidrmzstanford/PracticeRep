const express = require('express');
const router = express.Router();
const db = require('./db');
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
  res.json(db.articles);
});

router.get('/:articleId', (req, res) => {
  const article = db.articles.find(a => a.id === req.params.articleId);
  article ? res.json(article) : res.status(404).send('Article not found');
});

router.post('/', (req, res) => {
    const { title, content, author } = req.body;

    // Create new article
    const newArticle = {
        id: uuidv4(),
        title,
        content,
        date: new Date().toISOString().split('T')[0], 
        author
    };

    db.articles.push(newArticle);
    res.status(201).json(newArticle);
});

module.exports = router;
