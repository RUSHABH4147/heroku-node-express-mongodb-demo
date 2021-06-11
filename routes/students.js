const express = require('express')
const studentmodel = require('../models/studentmodel')
const routers = express.Router()


routers.get('/', async(req,res)=>{
    try{
    const allstudent= await studentmodel.find()
    res.json(allstudent)}catch(err){
        res.json({msg:err})
    }

})



routers.post('/poststudent',(req,res)=>{
const student = new studentmodel({
    "name":req.body.name,
    "last_name":req.body.last_name,
    "avatar": req.body.avatar,
    "English":req.body.English,
    "Maths":req.body.Maths,
    "Phy":req.body.Phy,
    "chem":req.body.chem,
    "history":req.body.history,
    "total":req.body.total,
    "percentage":req.body.percentage,
    "result":req.body.result,
    'grade':req.body.grade
})
student.save().then(()=>{
    res.send(student)
}).catch((err)=>{
    console.log({msg:err})
})
})

routers.get('/:student_id', async(req,res)=>{
    try{
    const studentid= await studentmodel.findById(req.params.student_id)
    res.json(studentid)}catch(err){
        res.json({msg:err})
    }

})

module.exports=routers