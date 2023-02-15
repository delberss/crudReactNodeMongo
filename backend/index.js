require('dotenv').config();

const connectDB = require('./bd/connect')
connectDB();

require("./modules/express");