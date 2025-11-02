📝 Notes App (Node.js + MongoDB + JWT Authentication)

A simple and secure Notes Management Web App built using Node.js, Express, MongoDB, and EJS.
It allows users to sign up, log in, manage notes, and update their profile — all protected using JWT authentication.

🚀 Features

✅ User authentication (Sign up, Login, Logout) using JWT and cookies
✅ Password encryption using bcrypt
✅ Protected routes using custom middleware
✅ Create, edit, and delete personal notes
✅ Update user profile (username, email)
✅ Dynamic EJS templates for UI rendering
✅ MongoDB Atlas connection for cloud data storage

🛠️ Technologies Used

Backend: Node.js, Express.js
Frontend: EJS Templates, CSS
Database: MongoDB (via Mongoose)
Authentication: JWT (jsonwebtoken), bcrypt
Other Tools: dotenv, cookie-parser, method-override

# 📝 Notes App (Node.js + MongoDB + JWT Authentication)

[![Live Demo](https://img.shields.io/badge/🌐_View%20Live%20Website-blue?style=for-the-badge)](https://secure-notes-backend-5.onrender.com/)


📁 Project Structure
.
├── app.js
├── models
│   ├── user.js
│   └── note.js
├── routes
│   └── notes.js
├── middleware
│   └── isAuth.js
├── views
│   ├── root-page.ejs
│   ├── signup.ejs
│   ├── login.ejs
│   ├── dashboard.ejs
│   ├── add-note.ejs
│   ├── edit-note.ejs
│   ├── profile-detail.ejs
│   ├── edit-username.ejs
│   └── edit-email.ejs
├── public
│   ├── signup.css
│   ├── login.css
│   ├── root-page.css
│   └── (other styles)
├── .env
└── package.json

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/notes-app.git
cd notes-app

2️⃣ Install dependencies
npm install

3️⃣ Create a .env file in the project root
JWT_SECRET=your_secret_key_here
MONGODB_URI=your_mongodb_connection_string

4️⃣ Start the server
node app.js

Server will run on:
👉 http://localhost:8080

🔐 Authentication Flow

Sign Up → /signup

User enters username, email, password, and age.
Password is hashed using bcrypt before being stored.
Login → /login
On successful login, a JWT token is generated and saved in cookies.
Middleware → isAuth.js
Every protected route verifies JWT from cookies.
Unauthorized users are redirected to /signup or /login.
Logout → /logout
JWT cookie is cleared.

🗂️ Routes Overview
🔸 Main Routes
Route	Method	Description
/	GET	Root page (welcome page)
/signup	GET	Render signup form
/create	POST	Register new user
/login	GET	Render login form
/login	POST	Authenticate user and create JWT cookie
/logout	GET	Clear token and logout
🔸 Notes Routes (Protected)
Route	Method	Description
/notes/dashboard	GET	View all notes of logged-in user
/notes/add	GET	Render add-note form
/notes/add	POST	Create a new note
/notes/edit/:id	GET	Render edit form for a note
/notes/edit/:id	PUT	Update a note
/notes/delete/:id	DELETE	Delete a note
🔸 Profile Routes
Route	Method	Description
/notes/profile	GET	View user profile details
/notes/update/username	GET/PUT	Update username
/notes/update/email	GET/PUT	Update email
🎨 EJS Views
File	Purpose
root-page.ejs	Welcome screen with login/signup links
signup.ejs	User registration form
login.ejs	Login form
dashboard.ejs	Displays all user notes
add-note.ejs	Form to add a new note
edit-note.ejs	Form to update an existing note
profile-detail.ejs	Shows user info
edit-username.ejs / edit-email.ejs	Forms for updating profile details
🧠 Key Concepts

JWT Authentication:
Each user gets a signed token stored in cookies.
Middleware checks and verifies it before allowing access to protected routes.

Password Security:
bcrypt ensures that passwords are stored securely in the database.

Method Override:
Enables using HTTP verbs like PUT and DELETE through forms.

🧩 Future Improvements

Add password update and reset functionality
Add user avatar upload
Implement search/filter for notes
Use flash messages for feedback

👨‍💻 Author

Shivam Kumar
📧 shivamkumar749362@gmail.com
🌐 GitHub: https://github.com/shivamkumar214
