const mongoose = require('mongoose');

const createuser = mongoose.Schema({
    "email": String,
    "first_name": String,
    "last_name": String,
    "avatar": String
})

module.exports=mongoose.model("users" , createuser);