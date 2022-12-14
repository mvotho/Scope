const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const ruleSetSchema = new Schema({
    ruleSet: String,
    gameModes: [{
            type: Schema.Types.ObjectId,
            ref: "gameMode"
        }]
});

const RuleSet = model('ruleSet', ruleSetSchema);
module.exports = RuleSet;