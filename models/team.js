const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const teamSchema = new Schema({
    teamName: String,
    members: [{ name: String, leader: Boolean }]
});

const Team = model('team', teamSchema);
module.exports = Team;