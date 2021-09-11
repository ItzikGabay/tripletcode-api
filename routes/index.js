/**
 * /routes/index.js
 * @desc Routes File.
 */

const express = require('express');
const router = express.Router({ mergeParams: true });

// Snippets Route
const snippetsRoute = require('./snippets/index')
const snippetsController = require('../controllers/snippets.controller')

// main - index
router.get('/', snippetsController.latestPublicSnippets);

// ROUTES CONFIGURATION
// ----------------------------
// Routes - /:id
router.use('/:snippet_id', snippetsRoute);

module.exports = router;