const snippetsSchema = require('./snippets.schema');


exports.getLatestPublicSnippets = async () => {
    return await snippetsSchema.find({ snippet_settings: { public_view: true } }).limit(10);
}

exports.createSnippet = async (data) => {
    const newSnippet = new snippetsSchema(data)
    await newSnippet.save()
    return newSnippet
}

exports.getSnippetById = async (snippet_id) => {
    return await snippetsSchema.findOneAndUpdate(snippet_id, { $inc: { 'views': 1 } })
}