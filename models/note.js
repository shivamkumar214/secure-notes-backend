const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Note', noteSchema);


// type: mongoose.Schema.Types.ObjectId	    Says userId will store a MongoDB _id
// ref: 'User'	                            Tells Mongoose that the _id comes from the User model
// Enables .populate()	                    So you can fetch full user details with a note


// You're telling MongoDB:
// “Each Note document belongs to a User, and that user is identified by their _id in the User collection.”

// This allows you to:

// Store the reference to a user (their _id) inside a note

// Later retrieve all notes that belong to a specific user

// Use .populate('userId') to fetch the full user data along with the note