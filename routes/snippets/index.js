/**
 * /routes/snippets/index.js
 * @desc Snippets routes File.
 */

const express = require('express');
const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
    const snippet_id = req.params.snippet_id;
    res.send(`${snippet_id}`)
})

module.exports = router;