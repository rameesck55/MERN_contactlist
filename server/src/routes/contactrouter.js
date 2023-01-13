const { query } = require('express');
const express=require('express')
const contactrouter=express.Router();



const contact_table=require('../model/contact_data')



// adding to db

contactrouter.post('/newlist',(req,res)=>{
    console.log(req.query)
   
    const contactab={
        Name:req.body.Name,
        Email:req.body.Email
    }

    console.log(contactab)
    var contts=contact_table(contactab)
    contts.save().then((conts)=>{
        return res.status(200).json({
            success:true,
            error:false,
            message:conts

        })
        
    })
    .catch((err)=>{
        return res.status(200).json({
            success:false,
            error:true,
            message:"not added"

        })
    })

   
})

//to print all datas from data base 
contactrouter.get('/outputlist',(req,res)=>{
    contact_table.find().then((datas)=>{
        console.log(datas)
        return res.status(200).json({
            success:true,
            error:false,
            message:datas

        })
        


    })
    .catch((err)=>{
        return res.status(200).json({
            success:false,
            error:true,
            message:err

        })
    })

})


//to delete a data 

contactrouter.post('/delete/:ids',(req,res)=>{
    var id=req.params.ids;
    contact_table.deleteOne({_id:id})
    .then((deleted)=>{
        return res.status(200).json({
            success:true,
            error:false,
            message:"data deleted"

        })
        


    })
    .catch((err)=>{
        return res.status(200).json({
            success:false,
            error:true,
            message:"not deleted"

        })
    })

})

//to edit data (selection)
contactrouter.post('/select_edit/:iid',(req,res)=>{
    var id=req.params.iid;
    contact_table.find({_id:id})
    .then((selected)=>{

        return res.status(200).json({
            success:true,
            error:false,
            message:selected

        })
    })

})

//final updation 
contactrouter.post('/update',(req,res)=>{
    console.log((req.body));
    var ids=req.body._id
    const editting={
        Name:req.body.Name,
        Email:req.body.Email
    }
    contact_table.updateOne({_id:ids},{$set:editting})
    .then((editted)=>{
        console.log(editted);
        return res.status(200).json({
            success:true,
            error:false,
            message:"data editted"

        })
        

    })
    .catch((err)=>{
        return res.status(200).json({
            success:false,
            error:true,
            message:"not updated"

        })
    })
    

})












module.exports=contactrouter