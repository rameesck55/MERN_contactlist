const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://rameesck55:abcdefg@cluster0.1ht0boc.mongodb.net/Contactappfullstack_data?retryWrites=true&w=majority')
const schema=mongoose.Schema
const contactschema=new schema({
    Name:{type:String},
    Email:{type:String}

})

var contactdata=mongoose.model('Contact_datas',contactschema)
module.exports=contactdata