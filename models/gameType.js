const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const gameTypeSchema = new Schema({
    gameType: String,
});

const GameType = model('gameType', gameTypeSchema);
module.exports = GameType;