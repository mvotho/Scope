const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const gameModeSchema = new Schema({
    gameMode: String,
    gameModeRules: {
        gameRules: {},
        playerOptions: {
            numberofLives: String,
            respawnDelay: Number,
            maxHealth: String,
            healthRegeneration: String,
            killCam: Boolean
        },
        teamOptions: {
            spectating: String,
            waveSpawnDelay: Number,
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

const GameMode = model('gamemode', gameModeSchema);
module.exports = GameMode;