/**
 * /index.js
 * @desc Main routes configuration file.
 **/

const express = require('express');
const app = express();
const { logger } = require('bs-logger');

/**
 * Database configuration
 */
const mongoose = require("mongoose");
const mongooseMiddleware = require('./middleware/database/mongoose/index');
mongooseMiddleware.establish_db_connection();
mongooseMiddleware.connectionListening()

/**
 * Router configuration
 */
const router = require("./routes/index.js");
app.use("/", router);


/**
 * Middleware configuration
 */
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(3000 || process.env.PORT, () => {
    logger("🚀 Server started! 🚀")
    logger("\033[35mView at: https://localhost:3000\033[0m")

})