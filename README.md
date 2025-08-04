# Leave Application Portal (HR)

A simple MERN (MongoDB, Express, React, Node.js) web application for managing employee leave applications. Admins can view all leave requests and update their statuses (Pending, Approved, Rejected).

---

## 🗂️ Features

- Employee management (name, email, department)
- Leave application submission (start date, end date, reason)
- Admin view of all leave applications
- Status update functionality for each application

---

## 🏗️ Tech Stack

- **Frontend**: React (Vite) + Axios
- **Backend**: Node.js + Express.js
- **Database**: MongoDB with Mongoose ODM

---

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/leave-application-portal.git
cd leave-application-portal

leave-application-portal/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── vite.config.js
    └── package.json

🔧 API Endpoints
Employees
POST /api/employees – Add a new employee

GET /api/employees – Get all employees

Leaves
POST /api/leaves – Submit a leave request

GET /api/leaves – View all leave requests

PATCH /api/leaves/:id/status – Update status of a leave

📌 Notes
Run MongoDB on your local machine or use MongoDB Atlas.

Uses proxy in Vite config to forward /api requests to backend.

✨ Screenshots
You can add screenshots here showing the frontend UI and status dropdowns.

📄 License
This project is licensed under the MIT License.

yaml
Copy
Edit

---

Let me know if you'd like this in downloadable format or want to add screenshots, deploy instructions (l