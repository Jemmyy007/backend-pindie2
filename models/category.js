const mongoose  = require("mongoose");

const categorieSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
})

const category = mongoose.model('categories', categorieSchema)

module.exports = category