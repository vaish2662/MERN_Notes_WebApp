# 📝 MERN Notes WebApp

A full-stack Notes Application built using MongoDB, Express.js, React, and Node.js (MERN Stack) with Tailwind CSS for styling.


![image](https://github.com/user-attachments/assets/29085af6-cda8-4d3f-bafb-092db26da6cd)

---

## 📦 Installation & Setup Guide

### 🔧 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or above)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/) or any code editor

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/vaish2662/MERN_Notes_WebApp.git
cd MERN_Notes_WebApp
```

---

### 2️⃣ Frontend Setup (React + Tailwind)

```bash
cd frontend_notes
npm install
npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### ▶️ Start the frontend

```bash
npm run dev
```

---

### 3️⃣ Backend Setup (Express + MongoDB)

```bash
cd ../backend
npm init -y
npm install express cors dotenv mongoose
npm install --save-dev nodemon
```



#### 🔐 Create `.env` file

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/notesapp
jWT_SECRET=<your_secret_key>
```


#### ▶️ Start the backend

```bash
nodemon index.js
```

---

## ✅ Features

- 📝 Create, Read, Update, and Delete Notes
- 🔐 Auth: Sign In / Sign Up
- 🌙 Dark theme UI (Tailwind CSS)
- 🌐 REST API using Express and MongoDB
- 📦 Deployed-ready structure

---


## 👩‍💻 Author

**Vaishnavi Patil**  
🔗 [GitHub Profile](https://github.com/vaish2662)

---
