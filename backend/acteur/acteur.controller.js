const express = require('express');
const router = express.Router();
const articleService = require('./acteur.service');

// routes
router.post('/create', create);
router.get('/', getAll);

module.exports = router;

function create(req, res, next) {
    articleService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    articleService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    articleService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    articleService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    articleService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    articleService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}