const mongoDB = require('mongoose')

const post = mongoDB.Schema({
    username : {
        type: String,
        required: [true, "username is required"]
    },
    userId : {
        type: String,
        required: [true, "email is required"]
    },
    data : {
        type: String,
        required: [true, "password is required"]
    },
    created_at:{
        type: String,
        required: [true, "password is required"],
        default: Date.now
    }
})


module.exports = mongoDB.model('Post', post)