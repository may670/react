const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxLength:50
    }
    email: {
        type:String,
        trim:true,
    }
    lastname: {
        type:String,
        maxlength:50
    }
    role: {
        type:Number,
        default:0
    },
    image:String,
    token: {
        type:String
    },
    tokenExp {
        type:number
    }

})

const User = mongoose.model('User', userSchema)

module.exports = { User }