const express = require("express");
const itemmodel = require("../models/itemmodel");
const itemroute = express.Router();
//POSTING ITEMS TO DATA-BASE
itemroute.post("/putitem", (req, res) => {
  const item = new itemmodel({
    item_name: req.body.item_name,
    price: req.body.price,
    avatar: req.body.avatar,
  });
  item
    .save()
    .then(() => {
      res.send(item);
    })
    .catch((err) => {
      console.log({ msg: err });
    });
});

//GETTING ALL ITEMS
itemroute.get("/", async (req, res) => {
  try {
    const allitems = await itemmodel.find();
    res.json(allitems);
  } catch (err) {
    res.json({ msg: err });
  }
});
//GETING ONE ITEM
itemroute.get("/:item_name", async (req, res) => {
  const getoneitem = await itemmodel.find({ item_name: req.params.item_name });
  res.json(getoneitem);
});
module.exports = itemroute;
