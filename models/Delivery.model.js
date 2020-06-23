const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const DeliverySchema=new Schema({
    Delivery_name:{
        type: String,
        required: true
      },
    Age:{
        type: String,
      },
    Phone_num:{
        type: String,
        required: true
      },
    Type_transmode:{
        type: String,
        required: true
      },
    adresses_work:{
        type: String,
        required: true
      },
    Count_num:{
        type: String,
        required: true
      },
    card_type:{
        type: String,
        required: true
      },
    card_num:{
        type: String,
        required: true
      },
    imag_card:{
        type: String,
        required: true
      },
    note:{
        type: String,
        required: true
      },
    Delivery_state:{
        type: Boolean,
        required: true
      },
      versionKey: false 
},
{ versionKey: false }
);

const Delivery=mongoose.model('delivery',DeliverySchema);

module.exports=Delivery;