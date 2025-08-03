# 🏥 NirogGyan Backend

This is the backend for the NirogGyan assignment, a Node.js + Express.js based medical appointment booking API. It connects to a MongoDB database and serves endpoints for doctors and appointment bookings.

---

## 🚀 Features

### 📋 Appointments

- Book an appointment with a doctor by providing name, email, date, and time.
- Save appointment details in MongoDB.
- Validation and error handling included.

### 👨‍⚕️ Doctors

- Fetch a list of all doctors.
- Filter/search doctors based on name or specialization.
- Get individual doctor details.

---

## 🧪 Tech Stack

- **Node.js** with **Express.js**
- **MongoDB** as the database
- **Mongoose** as the ODM (Object Document Mapper)
- **dotenv** for environment variables

---

## 🛠️ Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/dev-devendra21/NirogGyan_assignment.git
cd NirogGyan_assignment/Backend
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file

```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/
DB_NAME=Healthcare
```

4. Start the development server

```bash
npm run dev
```

---

## 📁 Folder Structure

```
src/
├── config/
│   ├── dbConfig.js            # MongoDB connection
│   └── serverConfig.js        # Server setup
├── controllers/               # Route handlers
│   ├── appointment.controller.js
│   └── doctor.controller.js
├── middlewares/
│   └── error.middleware.js    # Global error handler
├── models/                    # Mongoose schemas
│   ├── appointment.model.js
│   └── doctor.model.js
├── routes/
│   ├── index.route.js         # Route aggregator
│   └── v1/
│       ├── appointment.route.js
│       ├── doctor.route.js
│       └── index.route.js     # API v1 routes
├── services/                  # Business logic
│   ├── appointment.service.js
│   ├── doctor.service.js
│   └── index.js
├── index.js                   # Entry point
```

---

## 📮 API Endpoints

### Doctor

- `GET /api/v1/doctors` – Get all doctors
- `GET /api/v1/doctors/:id` – Get doctor by ID

### Appointment

- `POST /api/v1/appointments` – Book a new appointment

---

## 📦 Dependencies Used

- `express`
- `mongoose`
- `cors`
- `dotenv`

---

## 🙌 Author

**Devendra Chandana**
[GitHub Profile](https://github.com/dev-devendra21)

---
