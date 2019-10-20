const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const purchaseSchema = new mongoose.Schema({
    quantity:{
        type:String
    },
    email:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    address:{
        type:String
    },
    __v:{
        type:String
    }
}, {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    });
 


const Purchase = mongoose.model('purchase', purchaseSchema)

exports.Purchase = Purchase;
