const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const mapSchema = new Schema({
  map: String,
});

const Map = model('map', mapSchema);
module.exports = Map;