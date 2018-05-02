const mongoDB = require('mongoose')

const post = mongoDB.Schema({
    userId : {
        type: String,
        required: [true, "userId is required"]
    },
    data : {
        type: String,
        required: [true, "data is required"]
    },
    created_at:{
        type: Date,
        required: [true, "date is required"],
        default: Date.now
    }
})


module.exports = mongoDB.model('Post', post)