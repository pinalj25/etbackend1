const mongoose= require('mongoose')

const loginSchema=new loginSchema({
    username:{
        email:String,
        require:true
    },
    password:{
        password:String,
        require:true
    }
})
 module.exports={
    loginSchema
 }