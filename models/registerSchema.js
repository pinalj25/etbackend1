const mongoose=require('mongoose')

const registerSchema=new Schema({
    firstname:{
        name:String,
        require:true
    },
    lastname:{
        name:String,
        require:true
    },
    email:{
        email:String,
        require:true,
        unique:true
    },
    password:{
        password:String,
        require:true
    },
    confirmpwd:{
        confirmpwd:String,
        require:true
    }
    
})
module.exports={
    registerSchema
}