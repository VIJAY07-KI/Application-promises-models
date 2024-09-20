const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema ({
    name : {
        type : String,
        required : true
    },
    actor : {
        type : String,
        required : true
    },
    reviewRating : {
        type : Number,
        required : false
    }
})

const Movie = mongoose.model('Movie', userSchema)
module.exports = Movie