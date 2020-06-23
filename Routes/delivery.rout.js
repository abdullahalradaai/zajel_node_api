const express = require('express');
const router=express.Router();

const Delivery =require('../models/Delivery.model')
router.get('/',async (req,res,next)=>{
    try {
        const result=await Delivery.find({},{Phone_num:0});
        res.send(result);
    } catch (error) {
        console.log(error.message);
        console.log('error');
        res.send(error.message);
    }
});


router.post('/',async(req,res,next)=>{
    try {
        const delivery =new Delivery(req.body);
        const result =await delivery.save();
        res.send(result);
    } catch (error) {
    console.log(error.message);
        
    }
// console.log(req.body);

// const delivery =new Delivery({
    
//     Delivery_name:req.body.Delivery_name,
//     Age:req.body.Age,
//     Phone_num:req.body.Phone_num,
//     Type_transmode:req.body.Type_transmode,
//     adresses_work:req.body.adresses_work,
//     Count_num:req.body.Count_num,
//     card_type:req.body.card_type,
//     card_num:req.body.card_num,
//     imag_card:req.body.imag_card,
//     note:req.body.note,
//     Delivery_state:req.body.Delivery_state
// });
// delivery.save().then(result=>{
//     console.log(result);
//     res.send(result);

// }).catch(err=>{
//     console.log(err.message);
// })

});

router.get('/id',async(req,res,next)=>{
    const id=req.params.id;
    try {
        const result= await Delivery.findById({_id:id});
        res.send(result);
    } catch (error) {

    res.send(error.message);
    }
    
    
});

router.patch('/:id',(req,res,next)=>{
    res.send('update id');
});

router.delete('/:id',async(req,res,next)=>{
    const id=req.params.id;
    try {
        const delivery=await Delivery.findOneAndDelete(id);
    res.send('deleted'+delivery);
    } catch (error) {
    res.send(error.message);
        
    }
    
});
module.exports=router;