const mongoose = require('mongoose')

const studentformat = mongoose.Schema({
    "name":String,
    "last_name":String,
    "avatar":String,
    "English":Number,
    "Maths":Number,
    "Phy":Number,
    "chem":Number,
    "history":Number,
    "total":Number,
    "percentage":Number,
    "result":String,
    'grade':String
    
})

module.exports=mongoose.model("students",studentformat)