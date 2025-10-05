const express = require('express');
const router = express.Router();
const Note = require('../models/note');
const User = require('../models/user');
const isAuthenticated = require('../middleware/isAuth');
const mongoose = require('mongoose');


router.get('/dashboard', isAuthenticated, async (req, res) => {
    try {
        // Get all notes of this user
        const notes = await Note.find({ userId: req.user._id });

        // Get full user details
        const userId = new mongoose.Types.ObjectId(req.user._id);
        const intdata = await User.findById(userId);
        console.log(intdata);
        // Pass both to EJS
        
        if (!intdata) {
            return res.status(404).send("User not found in DB");
        }
        res.render('dashboard', { notes, intdata });
    }

    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

//profile details
router.get('/profile', isAuthenticated, async (req, res) => {
    try{
        // Get full user details
        const userId = new mongoose.Types.ObjectId(req.user._id);
        const intdata = await User.findById(userId);

        // Pass both to EJS
        if (!intdata) {
            return res.status(404).send("User not found in DB");
        }
        res.render('profile-detail.ejs', { intdata });
    }catch(err){
        console.error(err);
        res.status(500).send('Server Error');
    }
});



//change username
router.get('/update/username', isAuthenticated, async (req, res) => {
    
    try {
        const userId = new mongoose.Types.ObjectId(req.user._id);
        const intdata = await User.findById(userId);
        console.log(intdata);
        console.log("opening editing page");
    
        if (!intdata) return res.status(404).send("user not found");

        res.render('edit-username.ejs', { intdata }); // ✅ Use singular
    } catch (err) {
        console.error("Error loading note for edit:", err);
        res.status(500).send("Server error");
    }

});
router.put('/update/username', isAuthenticated, async (req, res) => {
    try{
        const userID = new mongoose.Types.ObjectId(req.user._id);
        console.log("changing started");
        await User.findOneAndUpdate(
            { _id: userID }, 
            { username: req.body.newUsername },
            {new: true}
        );

        res.redirect('/notes/dashboard');
    }catch(err){
        console.error(err);
        res.status(500).send('trying to change username');
    }
} )

//change email
router.get('/update/email', isAuthenticated, async (req, res) => {
    try {
        const userId = new mongoose.Types.ObjectId(req.user._id);
        const intdata = await User.findById(userId);
        console.log(intdata);
        console.log("opening editing page");
    
        if (!intdata) return res.status(404).send("user not found");

        res.render('edit-email.ejs', { intdata }); // ✅ Use singular
    } catch (err) {
        console.error("Error loading note for edit:", err);
        res.status(500).send("Server error");
    }

});
router.put('/update/email', isAuthenticated, async (req, res) => {
    try{
        const userID = new mongoose.Types.ObjectId(req.user._id);
        console.log("changing started");
        await User.findOneAndUpdate(
            { _id: userID }, 
            { email: req.body.newEmail },
            {new: true}
        );
        
        res.redirect('/notes/dashboard');
    }catch(err){
        console.error(err);
        res.status(500).send('trying to change username');
    }
});

// change password




// Add note
router.get('/add', isAuthenticated, (req, res) => {
    res.render('add-note.ejs');
});
router.post('/add', isAuthenticated, async (req, res) => {
    await Note.create({
        title: req.body.title,
        description: req.body.description,
        userId: req.user._id
    });
    res.redirect('/notes/dashboard');
});


// Update note
router.get('/edit/:id', isAuthenticated, async (req, res) => {
    try {
        const userId = new mongoose.Types.ObjectId(req.user._id);
        
        const note = await Note.findOne({ _id: req.params.id, userId });
        console.log(note);
        if (!note) return res.status(404).send("Note not found");

        res.render('edit-note.ejs', { note }); // ✅ Use singular
    } catch (err) {
        console.error("Error loading note for edit:", err);
        res.status(500).send("Server error");
    }
});
router.put('/edit/:id', isAuthenticated, async (req, res) => {
    try {
        await Note.findOneAndUpdate(
            { _id: req.params.id, userId: req.user._id },
            {
                title: req.body.title,
                description: req.body.description
            },
            { new: true }
        );

        res.redirect('/notes/dashboard'); // ✅ Make sure this matches your route
    } catch (err) {
        console.error("Error updating note:", err);
        res.status(500).send("Server error");
    }
});


// Delete note
router.delete('/delete/:id', isAuthenticated, async (req, res) => {
    try {
        await Note.findOneAndDelete({
            _id: req.params.id,
            userId: req.user._id
        });

        res.redirect('/notes/dashboard');
    } catch (err) {
        console.error("Error deleting note:", err);
        res.status(500).send("Server error");
    }
});


module.exports = router;







// try{
//         const userId = new mongoose.Types.ObjectId(req.user._id);
//         const intdata = await User.findById(userId);

//         await User.findOneAndUpdate(
//             { _id: req.user.id },
//             {
//                 title: req.body.title,
//                 description: req.body.description
//             },
//             { new: true }
//         );
        
//     }catch{
//         console.error(err);
//         res.status(500).send('Server Error');
//     }