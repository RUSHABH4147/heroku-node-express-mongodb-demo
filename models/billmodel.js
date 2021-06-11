const mongoose = require('mongoose')

const billmodel = mongoose.Schema({
    "date":Date,
    "customer_name":String,
    "ITEMinfo":Array,
    "item":String,
    "qty":Number,
    "TOTAL":Number,
    "DISCOUNT":Number,
    "NET_PRICE":Number

})

module.exports=mongoose.model("bills",billmodel)