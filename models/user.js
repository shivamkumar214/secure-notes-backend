const mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/authtestapp');


const userSchema = mongoose.Schema({
    username: {
        type: String
    },
    
    email: {
        type:String, 
        required:true 
    },

    password: {
        type:String, 
        required:true 
    },
    
    sekret: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now,      // optional: set default to now
        // you can also add validators, e.g.:
        // min: '2020-01-01',
        // max: Date.now
    },

    age: Number
});


module.exports = mongoose.model("user", userSchema);