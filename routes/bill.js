const express = require("express");
const billmodel = require("../models/billmodel");
const bilroutes = express.Router();

bilroutes.post("/postbill", (req,res)=>{
    const billpost= new billmodel({
        "date":req.body.date,
        "customer_name":req.body.customer_name,
        "ITEMinfo":req.body.ITEMinfo,
        "item":req.body.item,
        "qty":req.body.qty,
        "TOTAL":req.body.TOTAL,
        "DISCOUNT":req.body.DISCOUNT,
        "NET_PRICE":req.body.NET_PRICE
    })
    billpost.save().then(()=>{
        res.send(billpost)
    }).catch((err)=>{
        console.log({msg:err})
    })
})
module.exports=bilroutes