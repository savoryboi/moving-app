const mongoose = require("mongoose");

const URL = process.env.ATLAS_CONNECT_URL
  ? process.env.ATLAS_CONNECT_URL
  : "mongodb+srv://andybjerk:CzR1HX42f2ZRs97M@cluster0.4interr.mongodb.net/";

mongoose.connect(URL);

module.exports = mongoose.connection;