/**
 * controllers/snippets.controller.js
 * @desc the logic behind the routes.
 */

const snippets_model = require('../models/snippets.model')

// disabled for now:
// const fakeData = require('../middleware/fakedata')


/**
 * @title latestPublicSnippets()
 * @desc Retrieve the data of public shared snippets between users.
 * @return [Array] Snippets data
 */
exports.latestPublicSnippets = async (req, res) => {
    const result = await snippets_model.test()
    res.status(200).json(result)
    // res.status(200).json('NOT IMPLEMENTED: snippets list')
}