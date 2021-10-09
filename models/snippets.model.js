const snippetsSchema = require('./snippets.schema');


/**
 * @title getLatestPublicSnippets
 * @desc getting last public snippets
 * @return {<Promise>} Array of 5 top snippets
 */
exports.getLatestPublicSnippets = async () => {
    return await snippetsSchema.find({ snippet_settings: { public_view: true } }).sort({ views: -1, 'snippet_info.date_created': -1 }).limit(5);
}

/**
*  @title getAllSnippets
*  @desc getting last 50 snippets by order.
*  @return {<Promise>} - Array of 50 snippets ordered by date
**/
exports.getAllSnippets = async () => {
    return await snippetsSchema.find({ snippet_settings: { public_view: true } }).sort({ 'snippet_info.date_created': -1 }).limit(50);
}

/**
*  @title createSnippet
*  @desc saving new snippet to DB.
*  @param {Object} data data of snippet to add
*  @return {<Promise>} - status result of DB
**/
exports.createSnippet = async (data) => {
    const newSnippet = new snippetsSchema(data)
    await newSnippet.save()
    return newSnippet
}

/**
*  @title getSnippetById
*  @desc getting snippet by specific id
*  @param {String} snippet_id id of snippet to find
*  @return {<Promise>} - snippet result
**/
exports.getSnippetById = async (snippet_id) => {
    return await snippetsSchema.findByIdAndUpdate(snippet_id, { $inc: { 'views': 1 } })
}