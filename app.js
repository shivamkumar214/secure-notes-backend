// const  userModel = require("C:/Users/LENOVO/OneDrive/Desktop/coding/authorization_nodejs/practice2/models/user.js");
const userModel = require('./models/user');
const isAuthenticated = require('./middleware/isAuth');






require('dotenv').config();

const express = require('express');
const app = express();

const path = require('path');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));
const noteRoutes = require('./routes/notes');
app.use('/notes', noteRoutes);

app.get("/signup", (req, res) => {
    res.render('signup.ejs');
});

app.post("/create", async(req, res) => {
    let {username, email, password, age } = req.body;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async(err, hash) => {
            let createUser = await userModel.create({
                username,
                email, 
                password:hash,
                age
            });
            // res.send(createUser);// jwt login
            // let token = jwt.sign({email}, "shhhhhhhhhh");

            // let token = jwt.sign({ email }, process.env.JWT_SECRET);

            // res.cookie("token", token);
            res.render('login.ejs');
            
        });
    });
    // login 
    console.log("someone signuped Email: ", email);
    console.log("Password: ", password);
});

app.get("/login", (req, res)=>{
    res.render('login.ejs');
});

app.post("/login", async(req, res) => {
    let user = await userModel.findOne({ email: req.body.email });
    if(!user) return res.send("User not found !");
    // console.log(user.password,"    v/s    ", req.body.password);
    //hashed the entered password

    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (result) {
            let token = jwt.sign({ _id: user._id, email: user.email, age:user.age, password:user.password, username:user.username }, process.env.JWT_SECRET);
            res.cookie("token", token);
            let data = jwt.verify(token, process.env.JWT_SECRET); // ✅ FIXED HERE

            console.log("token", token);
            res.redirect('/notes/dashboard');
        } else {
            return res.status(401).send("Incorrect password");
        }
    });
});



app.get("/logout", function(req, res)  {
    res.cookie("token", "");
    console.log("logout route");
    res.redirect("/");      //now cookie token is deleted it's empty
})



app.listen(8080);