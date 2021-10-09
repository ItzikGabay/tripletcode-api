/**
 * /index.js
 * @desc Main routes configuration file.
 **/

const express = require('express');
const app = express();
const { logger } = require('bs-logger');
require('dotenv').config();

/**
 * Database configuration
 */
const mongoose = require("mongoose");
const mongooseMiddleware = require('./middleware/database/mongoose/index');
mongooseMiddleware.establish_db_connection();
mongooseMiddleware.connectionListening()


/**
 * Middleware configuration
 */
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Router configuration
 */
const router = require("./routes/index.js");
app.use("/", router);


app.listen(process.env.PORT || 5000, () => {
    logger("🚀 Server started! 🚀")
    logger("\033[35mView at: https://localhost:4001\033[0m")
})