## 🛡️ Secure Notes Backend

A secure backend for a Notes application built using **Node.js**, **Express**, and **MongoDB**.  
This project provides user authentication and note management features with JWT-based security.

---

## 🚀 Features

- 🔐 User Authentication (Signup / Login using JWT)
- 📝 Create, Edit, and Delete Notes
- 👤 Edit Username and Email
- 🔑 Secure Password Encryption (using bcrypt)
- 🧱 MongoDB Database with Mongoose
- 🌐 RESTful API Endpoints for frontend integration

---

## 🧰 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Authentication:** JWT, bcrypt  
- **Environment:** dotenv  

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/shivamkumar214/secure-notes-backend.git
cd secure-notes-backend
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Create a .env file
bash
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
4️⃣ Start the server
bash
Copy code
npm start
Server will run at http://localhost:5000

📡 API Endpoints
Auth Routes
Method	Endpoint	Description
POST	/signup	Register new user
POST	/login	Login user
PUT	/notes/update/username	Update username
PUT	/notes/update/email	Update email


Notes Routes
Method	Endpoint	Description
GET	/notes/dashboard	Get all notes
POST	/notes/add	Create a new note
PUT	/notes/edit/:id	Edit a note
DELETE	/notes/:id	Delete a note

🧑‍💻 Future Enhancements
Edit password functionality

Frontend integration (React.js or EJS)

Dark mode UI

Search and Filter Notes

🤝 Contributing
Contributions are welcome! Feel free to fork this repo and submit pull requests.

👨‍💻 Author
Shivam Kumar
B.Tech CSE (3rd Year)
GitHub Profile

yaml
Copy code

---

## 💡 Next Step:
1. Create a new file → `README.md`  
2. Paste this content inside it  
3. Run:
   ```bash
   git add README.md
   git commit -m "Added README.md documentation"
   git push
