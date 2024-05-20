const mongoose = require("mongoose")
const { type } = require("os")
const { title } = require("process")

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    developer: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    }

})

const game = mongoose.model("games", gameSchema)
module.exports = game;

