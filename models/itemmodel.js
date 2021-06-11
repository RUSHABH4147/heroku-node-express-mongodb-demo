const mongoose = require('mongoose')

const itemmodel = mongoose.Schema({
    "item_name":String,
    "price":Number,
    "avatar":String
})

module.exports=mongoose.model("item-data",itemmodel)