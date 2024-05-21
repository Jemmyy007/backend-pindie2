const mongoose = require("mongoose")
const { type } = require("os")
const { title } = require("process")
const categoryModel = require("./category")
const userModel = require("./user")

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
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: categoryModel
    }],
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: userModel
    }]
})

const game = mongoose.model("games", gameSchema)
module.exports = game;

