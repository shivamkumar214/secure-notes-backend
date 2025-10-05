const jwt = require('jsonwebtoken');

function isAuthenticated(req, res, next) {
    let token = req.cookies.token;          //by using this token only possible to access email and age 
                                           //because i passed email and age in login post to cookie as token 

    if (!token) return res.redirect('/signup');
    
    try {
        let data = jwt.verify(token, process.env.JWT_SECRET);
        req.user = data;         // Because req is the object passed through all middlewares and routes.
        next();                 // You’re storing the authenticated user's info in req.user so it's available everywhere.
    } catch {
        return res.redirect('/login');
    }
}

module.exports = isAuthenticated;