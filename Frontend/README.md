# 🏥 NirogGyan Frontend

This is the frontend for the NirogGyan assignment, a React-based medical appointment booking platform. It allows users to browse doctors, view their profiles, and book appointments.

---

## 🚀 Features

### 🏠 Doctor List Home Page

- View all registered doctors.
- Search doctors by **name** or **specialization**.
- Each doctor card links to a detailed profile page.

### 👨‍⚕️ Doctor Profile Page

- Displays full doctor profile with photo, specialization, experience, education, availability, and consultation fee.
- Booking form to schedule an appointment by providing name, email, date, and time.
- Form submission feedback using toasts (success/failure).

### 📣 Appointment Feedback

- Uses **React Toastify** to show real-time notifications for:

  - ✅ Successful appointment booking
  - ❌ Failed booking attempts

---

## 🧪 Tech Stack

- **React** with Vite
- **TypeScript**
- **Tailwind CSS** for styling
- **React Router DOM** for navigation
- **React Icons** for icons
- **React Toastify** for notifications

---

## 🛠️ Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/dev-devendra21/NirogGyan_assignment.git
cd NirogGyan_assignment/Frontend
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file

```env
VITE_BASE_URL=http://localhost:5000/api
```

4. Start the development server

```bash
npm run dev
```

---

## 📁 Folder Structure

```
src/
├── api/                     # API requests (appointment, doctors)
│   ├── appointment.ts
│   └── doctors.ts
├── assets/                 # Assets (images, etc.)
├── components/
│   ├── DoctorList.tsx
│   ├── Layout.tsx
│   └── PatientForm.tsx
├── components/ui/          # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Modal.tsx
├── pages/                  # Route pages
│   ├── Feedback.tsx        # Success/Failure screen
│   ├── Home.tsx            # Doctor list page
│   └── Profile.tsx         # Doctor profile & booking
├── types/                  # TypeScript DTOs
│   ├── appointment.dto.ts
│   └── doctor.dto.ts
├── utils/                  # Utility functions
│   └── format.ts
```

---

## 🗶 Packages Used

- `@tailwindcss/vite`: ^4.1.11
- `react`: ^19.1.0
- `react-dom`: ^19.1.0
- `react-icons`: ^5.5.0
- `react-router-dom`: ^6.30.1
- `react-toastify`: ^11.0.5
- `tailwindcss`: ^4.1.11

---

## 🙌 Author

**Devendra Chandana**
[GitHub Profile](https://github.com/dev-devendra21)

---
