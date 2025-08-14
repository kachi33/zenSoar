# 🧪 ZenSoar - Diagnostic Laboratory Management System

ZenSoar is a modern, role-based laboratory management platform for managing patients, appointments, test results, and billing in one place. It is based on a production medical data management system built for Zenith Medical and adapted into a public demo to showcase the same core architecture, role-based dashboards, and responsive UI patterns.
---

## 🚀 Live Demo
🔗 **[View ZenSoar in Action](https://zen-soar-uadq.vercel.app/)**

**Test Credentials**  
*(Replace with real demo accounts)*  
- **Admin:** `admin@example.com` / `password123`  
- **Lab Scientist:** `scientist@example.com` / `password123`  
- **Receptionist:** `receptionist@example.com` / `password123`  

---

## Features

### Role-Based Authentication
- Secure login with three distinct user roles: **Admin**, **Lab Scientist**, **Receptionist**.

### Admin Dashboard
- System overview, analytics, and full user management.

### Lab Scientist Portal
- Test assignment, results entry, and case management.

### 🏥 Receptionist Interface
- Patient registration, appointment scheduling, and billing.

---

## Screenshots

![Login Screen](screenshots/login.png)  
![Admin Dashboard](screenshots/admin-dashboard.png)  
![Lab Scientist Workflow](screenshots/lab-scientist.png)  
![Receptionist Scheduling](screenshots/receptionist.png)  

---

## 🛠 Tech Stack

**Frontend:** React 18, TypeScript  
**UI & Styling:** Material-UI, Tailwind CSS  
**Authentication:** Firebase Auth  
**Routing:** React Router DOM  
**State Management:** React Context  

---

## 🏗 Architecture
```
React + TypeScript (Frontend)
│
├── Firebase Authentication (Role-based Access)
├── Context API (State Management)
└── Material-UI + Tailwind (Responsive UI)
```
---

## User Roles

- **Admin** → Manage users, view analytics, oversee system settings.  
- **Lab Scientist** → Process tests, enter results, ensure quality control.  
- **Receptionist** → Handle patient intake, scheduling, and billing.  

---

## Roadmap

### Completed
- Role-based authentication  
- Responsive dashboards for each role  
- Mock data setup for backend integration  
- Basic analytics and charts  

### 🚧 In Progress / Planned
#### **UX & Performance**
- Dark mode with theme persistence  
- Loading states & skeleton screens  
- Form validation and error boundaries  
- Keyboard shortcuts for quick actions  

#### **Data & Operations**
- Bulk operations with Excel/PDF export  
- Advanced search and filtering  
- Virtual scrolling for large datasets  
- Audit trail for compliance logging  

#### **Real-time & Collaboration**
- WebSocket notifications for test results  
- Multi-user editing with live updates  
- Appointment calendar with drag-and-drop  

#### **AI & Analytics**
- Predictive analytics for lab operations  
- IoT equipment integration  
- Automated quality control workflows  
- Custom BI dashboard builder  

---

## 📄 License
MIT License © 2025 [Kachi]

---