# Leave Application Portal (HR)

A modern MERN (MongoDB, Express, React, Node.js) web application for managing employee leave applications. Admins can view all leave requests and update their statuses (Pending, Approved, Rejected).

---

## 🗂️ Features

- **Employee Management**: Add and manage employees with name, email, and department
- **Leave Application Submission**: Submit leave requests with start date, end date, and reason
- **Admin Dashboard**: View all leave applications in a clean, modern interface
- **Status Management**: Update leave status (Pending, Approved, Rejected) with real-time updates
- **Responsive Design**: Modern UI built with Tailwind CSS
- **Form Validation**: Client and server-side validation for data integrity

---

## 🏗️ Tech Stack

- **Frontend**: React 18 + Vite + Tailwind CSS + Axios
- **Backend**: Node.js + Express.js + Mongoose
- **Database**: MongoDB
- **Development**: Nodemon for backend hot reloading

---

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/leave-application-portal.git
cd leave-application-portal
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `config.env` file in the backend directory:
```env
MONGO_URI=mongodb://localhost:27017/leave-application-portal
PORT=5000
NODE_ENV=development
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

---

## 📁 Project Structure

```
leave-application-portal/
│
├── backend/
│   ├── models/
│   │   ├── Employee.js
│   │   └── Leave.js
│   ├── routes/
│   │   ├── employees.js
│   │   └── leaves.js
│   ├── config.env
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── App.jsx
    │   ├── main.jsx
    │   ├── index.css
    │   └── App.css
    ├── public/
    ├── index.html
    ├── package.json
    ├── tailwind.config.js
    ├── postcss.config.js
    └── vite.config.js
```

---

## 🔧 API Endpoints

### Employees
- `POST /api/employees` – Add a new employee
- `GET /api/employees` – Get all employees

### Leaves
- `POST /api/leaves` – Submit a leave request
- `GET /api/leaves` – View all leave requests
- `PATCH /api/leaves/:id/status` – Update status of a leave

---

## 🚀 Usage

1. **Add Employees**: Click "Add Employee" button and fill in the employee details
2. **Submit Leave Requests**: Click "Submit Leave Request" and select an employee, dates, and reason
3. **Manage Applications**: View all leave applications and update their status using the dropdown

---

## 📌 Notes

- Ensure MongoDB is running on your local machine or update the `MONGO_URI` in `config.env` for MongoDB Atlas
- The frontend uses Vite's proxy configuration to forward `/api` requests to the backend
- All forms include client-side validation and error handling
- The application includes loading states and error messages for better UX

---

## 🛠️ Development

### Backend Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

---

## 📄 License

This project is licensed under the MIT License.