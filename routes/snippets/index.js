/**
 * /routes/snippets/index.js
 * @desc Snippets routes File.
 */

const express = require('express');
const router = express.Router({ mergeParams: true });
const snippetsController = require('../../controllers/snippets.controller')

router
    .get('/', snippetsController.retrieveSnippet)
    .post('/', snippetsController.retrieveSnippet)

module.exports = router;