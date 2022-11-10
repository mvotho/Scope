const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const ruleSetSchema = new Schema({
    ruleSet: String,
    gameModes: [{
        gameMode:{
            type: Schema.Types.ObjectId,
            ref: "gameMode"
        }
        
}]
});

const RuleSet = model('ruleset', ruleSetSchema);
module.exports = RuleSet;