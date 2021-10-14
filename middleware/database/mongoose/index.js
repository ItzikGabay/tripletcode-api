const mongoose = require("mongoose");
const { logger } = require('bs-logger');

// prod \ dev mongodb connection
let DB_URL = process.env.PROD_DB;
if (!process.env.NODE_ENV === 'production') {
    DB_URL = process.env.DEV_DB
}

/**
*  @title establish_db_connection
*  @desc establish new connection with Mongoose to MONGODB db.
**/
exports.establish_db_connection = (() => {
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        // TODO: check about mongoose settings
        // useCreateIndex: true,
        // useFindAndModify: false
    });
});

/**
*  @title connectionListening
*  @desc listening once the connection listener created & error received
**/
exports.connectionListening = (() => {
    mongoose.connection.once('open', () => {
        logger("\033[92m🚀 Mongoose connection established! 🚀 \033[92m")
    })
    mongoose.connection.once('error', () => {
        logger.warn("Error trying to connect to mongoose!")
    })
})

