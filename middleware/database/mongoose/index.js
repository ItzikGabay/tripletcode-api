const mongoose = require("mongoose");
const { logger } = require('bs-logger');

exports.establish_db_connection = (() => {
    mongoose.connect('mongodb://localhost:27017/tripletcode', {
        useNewUrlParser: true,
        useUnifiedTopology: true
        // Disabled because of an error:
        // useCreateIndex: true,
        // useFindAndModify: false
    })
})

exports.connectionListening = (() => {
    const db = mongoose.connection;
    db.once('error', () => {
        logger.warn("Error trying to connect to mongoose!")
    })
    db.once('open', () => {
        logger("🚀 Mongoose connection established! 🚀")
    })
    // db.on('error', console.error.bind(console, 'connection error'))
})

