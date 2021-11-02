const express=require('express')
const Contact=require('../model/Contact')
var router=express.Router()
// tast api
router.get('/test',(req,res)=>{
    res.send({type:'GET'})
})
// add user
router.post('/adduser',(req,res)=>{
    const {name,email,phone}=req.body
    const user=new Contact({name,email,phone})
    user.save()
    .then(user=>res.send({"user": user}))
    .catch(err=>{console.log(err)})
})
// model.find() to Search Your Database
router.get('/search',(req,res)=>{
    Contact.find({name:"Asma"})
    .then (users=>res.send({"users'name Asma": users}))
    .catch(err=>{console.log(err)})
})
// model.findOne() to Return a Single Matching Document from Your Database
router.get('/searchOne',(req,res)=>{
    Contact.findOne({name:"Asma"})
    .then(user=>res.send({"the fist user named Asma is": user}) )
    .catch(err=>{console.log(err)})
})
// model.findById() to Search Your Database By _id
router.get('/searchById',(req,res)=>{
    
    Contact.findById({_id:"617c62a296b8f86ef635f0b6"})
    .then(user=>res.send({"user having the Id:617c62a296b8f86ef635f0b6 is":user}))
    .catch(err=>console.log(err))
})
//   Classic Updates by Running Find, Edit, then Save
router.put('/classicUpdate/:_id',(req,res)=>{
    let {_id}=req.params
    let {name,email,phone}=req.body
    let user=Contact.findById({_id})
    user.updateOne({_id} , {$set :{name , email , phone}}) 
    .then(usr=>{res.send({"we update ":usr})})
    .catch(err=>console.log(err))
})




// model.findOneAndUpdate 
router.put('/edituser/:_id',(req,res)=>{
    let {_id}=req.params
    let {name,email,phone}=req.body
    Contact.findByIdAndUpdate({_id},{$set:{name,email,phone}})
    .then(user=>{res.send({"we update ":user})})
    .catch(err=>console.log(err))
})
        // delete user
// Delete One Document Using model.findByIdAndRemove
router.delete('/deleteuser/:_id',(req,res)=>{
    let {_id}=req.params
    Contact.findByIdAndRemove({_id})
    .then(user=>{res.send({"removed user":user})})
    .catch(err=>console.log(err))
})

// Delete Many Documents with model.remove() Users with name containig yas(yasser yassmine yassine
router.delete('/deleteMany',(req,res)=>{
    
    Contact.remove({name:{$regex:"Yas"}})
    .then(users=>{res.send({"removed users":users})})
    .catch(err=>console.log(err))
})
//  Search Query  :sorted by name , limit the results to three documents, and hide their email
router.get('/SortedSearch',(req,res)=>{
    Contact.find().sort("name").limit(3).select(["name","phone"] )
    .then(users=>res.send({"Sorted contacts list": users}) )
    .catch(err=>{console.log(err)})
})



module.exports = router
