/**
 * controllers/snippets.controller.js
 * @desc the logic behind the routes.
 */

const snippets_model = require('../models/snippets.model')
const snippets_validation = require('../models/snippets.validation')


/**
 * @title latestPublicSnippets()
 * @desc Retrieve the data of public shared snippets between users.
 * @return [Array] Snippets data
 */
exports.latestPublicSnippets = async (req, res) => {
    const result = await snippets_model.getLatestPublicSnippets()
    res.status(200).json(result)
}

/**
 * @title addSnippet()
 * @desc Add new snippet to the database.
 * @return {Object} data of snippet from the user.
 */
exports.addSnippet = async (req, res) => {
    // Trying to catch if we have any 
    // errors while validating the data
    try {
        let value = await snippets_validation.validateAsync(req.body)
        const result = await snippets_model.createSnippet(req.body)
        res.status(200).json(result)
    } catch (e) {
        res.status(401).json({msg: 'Error occurred. please make sure you fill all the details.', info: e.details[0].message})
    }
}

/**
 * @title retrieveSnippet()
 * @desc Retrieve specific snippet with id
 * @return {Object} data of snippet from the user.
 */
exports.retrieveSnippet = async (req, res) => {
    let params_id = req.params.snippet_id;
    let result = await snippets_model.getSnippetById(params_id);
    res.status(200).json(result);
}


// res.status(200).json('NOT IMPLEMENTED: snippets list')