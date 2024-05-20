const mongoose = require("mongoose")

const DB_URL = 'mongodb://localhost:27017/pindie'

async function connectToDatabase(){
    try{
        await mongoose.connect(DB_URL)
        console.log("Подключение к БД прошло успешно")
    } catch(e) {
        console.log("Ошибка при подключении БД:")
        console.error(err)
    }
}

module.exports = connectToDatabase