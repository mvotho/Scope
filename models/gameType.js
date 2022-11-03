const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const gameTypeSchema = new Schema({
    gameRules: {},
    playerOptions: {
        numberofLives: String,
        respawnDelay: Integer,
        maxHealth: String,
        healthRegeneration: String,
        KillCam: Boolean
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
});

const GameType = model('gameType', gameTypeSchema);
module.exports = GameType;