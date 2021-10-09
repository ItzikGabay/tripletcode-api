/**
 * /routes/index.js
 * @desc Routes File.
 */

const express = require('express');
const router = express.Router({ mergeParams: true });

// ROUTER
// ------
const snippetsRoute = require('./snippets/index')
const snippetsController = require('../controllers/snippets.controller')

// Home - url/index
router
    .get('/', snippetsController.latestPublicSnippets)
    .post('/', snippetsController.saveNewSnippet)

// Explore - url/explore
router
    .get('/explore', snippetsController.fetchSnippetsData)

// Live - url/live
router
    .post('/live', snippetsController.startLiveSession)

// Snipets - /:id
router.use('/:snippet_id', snippetsRoute);

module.exports = router;