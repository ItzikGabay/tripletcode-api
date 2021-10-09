/**
 * controllers/snippets.controller.js
 * @desc the logic behind the routes.
 */


// pusher configuration
const Pusher = require("pusher");
const pusher = new Pusher({
    appId: "1278681",
    key: "27c1635cedaefecbfb7c",
    secret: "9e072ecbc03d8c447c72",
    cluster: "eu",
    useTLS: true
});

// imports
const snippets_model = require('../models/snippets.model')
const snippets_validation = require('../models/snippets.validation')
const { logger } = require('bs-logger');

// functions
// ---------

/**
 * @title latestPublicSnippets()
 * @desc Retrieve latest snippets sorted by highest score & public shared.
 * @return [Array] Snippets data
 */
exports.latestPublicSnippets = async (req, res) => {
    const result = await snippets_model.getLatestPublicSnippets()
    logger(`DB $GET(latestPublicSnippets) Request`)
    res.status(200).json(result)
}

/**
 * @title fetchSnippetsData()
 * @desc Retrieve the data of public shared snippets between users.
 * @return [Array] Snippets data
 */
exports.fetchSnippetsData = async (req, res) => {
    const result = await snippets_model.getAllSnippets()
    logger(`DB $GET(allSnippets) Request`)
    res.status(200).json(result)
}

/**
 * @title addSnippet()
 * @desc Add new snippet to the database.
 * @return {Object} data of snippet from the user.
 */
exports.saveNewSnippet = async (req, res) => {
    // Trying to catch if we have any 
    // errors while validating the data
    try {
        let value = await snippets_validation.validateAsync(req.body);
        const result = await snippets_model.createSnippet(req.body);
        logger(`DB $GET(addSnippet) Request ${req.body}`);
        res.status(200).json(result);
    } catch (e) {
        res.status(401).json({ msg: 'Error occurred. please make sure you fill all the details.', info: e.details[0].message });
    }
}

/**
 * @title retrieveSnippetById()
 * @desc Retrieve specific snippet with id
 * @return {Object} data of snippet from the user.
 */
exports.retrieveSnippetById = async (req, res) => {
    try {
        let params_id = req.params.snippet_id;
        let result = await snippets_model.getSnippetById(params_id);
        res.status(200).json(result);
    } catch (e) {
        console.log(e);
    }
}

/**
 * @title startLiveSession()
 * @desc Start new live session hosted by pusher.
 */
exports.startLiveSession = async (req, res) => {
    try {
        pusher.trigger("my-channel", "my-event", {
            id: req.body.username,
            message: req.body.codeData
        });
        res.status(200).json('Session started sucessfuly!');
    } catch (e) {
        console.log(e);
    }
}