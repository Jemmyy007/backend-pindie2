const sendAllCategories = (req, res) =>{
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(req.categoriesArray))
}

module.exports = sendAllCategories