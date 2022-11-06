const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const gameModeSchema = new Schema({
    gameMode: String,
    gameModeRules: {
        gameRules: {},
        playerOptions: {
            numberofLives: String,
            respawnDelay: Integer,
            maxHealth: String,
            healthRegeneration: String,
            killCam: Boolean
        },
        teamOptions: {
            spectating: String,
            waveSpawnDelay: Integer,
            forceRespawn: Boolean,
            radarAlwaysOn: Boolean,
            friendlyFire: Boolean
        },
        gameplayOptions: {
            headshotOnly: Boolean,
            perks: Boolean,
            killstreakRewards: Boolean,
            hardcoreMode: Boolean,
            thirdPerson: Boolean
        }
    },
    maps: [{
        type: [Schema.Types.ObjectId],
        ref: "maps"
    }]
});

const GameMode = model('gameMode', gameModeSchema);
module.exports = GameMode;