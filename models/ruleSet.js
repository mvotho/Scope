const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const ruleSetSchema = new Schema({
    ruleSet: String,
    gameMode: [{
        type: [Schema.Types.ObjectId],
        ref: "gameModes"
    }]
});

const RuleSet = model('ruleSet', ruleSetSchema);
module.exports = RuleSet;