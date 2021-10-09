const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

/**
*  @title snippetsSchema
*  @desc snippet schema when saved to DB.
**/
const snippetsSchema = new Schema({
    snippet_data: String,
    snippet_info: {
        title: { type: String, default: uuidv4},
        date_created: { type: Date, required: true, default: Date.now },
        owner_id: {type: String, default: 'Annonymous'},
    },
    snippet_settings: {
        public_view: Boolean,
    },
    views: { type: Number, default: 0}
})

module.exports = mongoose.model('Snippets', snippetsSchema);