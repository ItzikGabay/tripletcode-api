/**
 * /routes/snippets/index.js
 * @desc Snippet routes File.
 */

const express = require('express');
const router = express.Router({ mergeParams: true });
const snippetsController = require('../../controllers/snippets.controller')

// Single Snippet - /:id
router
    .get('/', snippetsController.retrieveSnippetById)

module.exports = router;