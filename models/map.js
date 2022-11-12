const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const mapSchema = new Schema({
  name: String,
});

const Map = model('map', mapSchema);
module.exports = Map;