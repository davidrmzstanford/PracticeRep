const express = require('express');
const router = express.Router();
const db = require('./db');
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
    const articleId = req.params.articleId;
    const comments = db.comments.filter(c => c.articleId === articleId);
    res.json(comments);
});

router.get('/:commentId', (req, res) => {
    const { articleId, commentId } = req.params;
    const comment = db.comments.find(c => c.id === commentId && c.articleId === articleId);
    comment ? res.json(comment) : res.status(404).send('Comment not found');
});

router.post('/', (req, res) => {
    const { articleId } = req.params;
    const { author, content } = req.body;

    const articleExists = db.articles.some(article => article.id === articleId);
    if (!articleExists) {
        return res.status(404).send('Article not found');
    }
    const newComment = {
        id: uuidv4(),
        timestamp: Date.now(),
        content,
        articleId,
        author
    };

    db.comments.push(newComment);
    res.status(201).json(newComment);
});

module.exports = router;
