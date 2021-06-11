const express = require("express");
const router = express.Router();
const Createuser = require('../models/createuser')
//get all user
router.get("/" ,async(req,res)=>{
    try{
    const alluser= await createuser.find()
    res.json(alluser)
    }catch(err){
        res.json({msg:err})
    }
})
// create user
router.post('/createUser',(req,res)=>{
    const create = new Createuser({
    "email": req.body.email,
    "first_name": req.body.first_name,
    "last_name": req.body.last_name,
    "avatar": req.body.avatar
    });
    create.save()
    .then(() => {
        res.send(create);
      })
      .catch((err)=>{
        res.json({msg:err})
      })
    // console.log(req.body)
    // console.log(cuser)
    // res.send(cuser)
    
})
//single user
router.get("/:user_id" ,async(req,res)=>{
    try{
    const user= await createuser.findById(req.params.user_id)
    res.json(user)
    }
    catch(err){
        res.json({msg:err})

    }
})
//delete user
router.delete("/remove/:user_id" ,async(req,res)=>{
    try{
    const remove= await createuser.remove({_id:req.params.user_id})
    res.json(remove)
    }
    catch(err){
        res.json({msg:err})

    }
})
module.exports=router;