const express = require('express');
const app=express();
const mongoose=require('mongoose')

app.use(express.json());
app.use(express.urlencoded({extended:true}))
mongoose.connect(
    'mongodb+srv://zajelsecurity:777151565@realmcluster-taahg.mongodb.net/test?retryWrites=true&w=majority'
,{
    dbName:'zajeldb',
    user:'zajelsecurity',
    pass:'777151565',
    useNewUrlParser:true,
    useUnifiedTopology:true}
)
.then(()=>{
    console.log('connected ....')
});

app.all('/test/:id', (req,res)=>{
   // console.log(req.query);
    //res.send(req.query);

    //console.log(req.params);
    //res.send(req.params);
});

const DeliveryRoute=require('./Routes/delivery.rout');
app.use('/Delivers',DeliveryRoute);


//app.listen(5000,()=>{
   // console.log('success');
//});
