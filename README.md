# 🧪 ZenSoar - Diagnostic Laboratory Management System

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://zen-soar-uadq.vercel.app/)
[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue)](https://www.typescriptlang.org/)
[![Material--UI](https://img.shields.io/badge/Material--UI-7.3.1-blue)](https://mui.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> A modern, role-based laboratory management platform for managing patients, appointments, test results, and analytics. Built as a portfolio/demo project showcasing production-grade architecture, inspired by real-world medical data management systems.

## 🚀 [Live Demo](https://zen-soar-uadq.vercel.app/)

**Demo Credentials** *(Shared demo accounts - do not use for sensitive data)*

| Role | Email | Password |
|------|-------|----------|
| 👨‍💼 **Admin** | `admin@zensoar.com` | `password123` |
| 🔬 **Lab Scientist** | `lab@zensoar.com` | `password123` |
| 📋 **Receptionist** | `reception@zensoar.com` | `password123` |

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [User Roles](#-user-roles)
- [Development](#-development)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🔐 Role-Based Authentication
- Secure Firebase Authentication
- Three distinct user roles with protected routes
- Automatic role detection and dashboard routing
- One-click demo account login

### 👨‍💼 Admin Dashboard
- **System Overview:** Real-time statistics on patients, tests, and staff
- **User Management:** Complete CRUD operations for system users
- **Advanced Analytics:** Interactive charts with revenue, test volume, and performance metrics
- **System Settings:** Comprehensive configuration panel for notifications, security, and preferences
- **Department Performance:** Track efficiency metrics across lab departments

### 🔬 Lab Scientist Portal
- **Test Management:** View assigned tests with patient information
- **Results Entry:** Add and edit test results with dialog-based forms
- **Test Tracking:** Monitor pending, in-progress, and completed tests
- **Quality Control:** Results review and approval workflows (planned)

### 📋 Receptionist Interface
- **Patient Management:** Register and manage patient records
- **Contact Information:** Phone and email management
- **Billing Overview:** Track pending payments and test costs
- **Appointment Scheduling:** Calendar-based booking system (planned)
- **Registration Workflows:** Document upload and verification (planned)

### 📊 Analytics & Insights
- **Revenue Tracking:** Daily trends with dual-axis line charts
- **Test Distribution:** Pie charts showing test type breakdowns
- **Performance Metrics:** Department efficiency with progress indicators
- **System Alerts:** Real-time notifications for critical events
- **Top Performers:** Monthly leaderboard with accuracy ratings

---

## 🛠 Tech Stack

### Frontend
- **Framework:** React 19.1.0 (latest)
- **Language:** TypeScript 5.7.2 (strict mode)
- **Build Tool:** Vite 6.3.5
- **UI Library:** Material-UI (MUI) v7.3.1
- **Styling:** Tailwind CSS v4.1.6
- **Routing:** React Router DOM v7.8.0

### Data Visualization
- **Charts:** Recharts v3.1.2
- **Data Grid:** MUI X Data Grid v8.10.0
- **Date Pickers:** MUI X Date Pickers v8.10.0

### Authentication & State
- **Auth:** Firebase Authentication v12.1.0
- **State Management:** React Context API
- **Date Handling:** date-fns v4.1.0, dayjs v1.11.13

### Development Tools
- **Linting:** ESLint v9.25.0
- **Type Checking:** TypeScript with strict mode
- **Deployment:** Vercel

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** 18.x or higher
- **npm** 9.x or higher (or yarn/pnpm)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/zenSoar.git
   cd zenSoar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
   VITE_FIREBASE_PROJECT_ID=your_project_id_here
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id_here
   VITE_FIREBASE_APP_ID=your_app_id_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173`

### Firebase Setup

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Email/Password Authentication**
3. Create demo users with emails:
   - `admin@zensoar.com`
   - `lab@zensoar.com`
   - `reception@zensoar.com`
4. Copy your Firebase config to `.env`

---

## 📁 Project Structure

```
zenSoar/
├── public/                     # Static assets
│   ├── logo.svg               # Application logo
│   ├── favicon.ico            # Favicon
│   └── ...                    # PWA icons
├── src/
│   ├── components/            # React components
│   │   ├── analytics/         # Analytics dashboard
│   │   ├── auth/              # Authentication components
│   │   │   ├── Login.tsx
│   │   │   └── ProtectedRoute.tsx
│   │   ├── common/            # Reusable components
│   │   ├── dashboards/        # Role-specific dashboards
│   │   │   ├── AdminDashboard.tsx
│   │   │   ├── LabScientistDashboard.tsx
│   │   │   └── ReceptionistDashboard.tsx
│   │   ├── layout/            # Layout components
│   │   ├── settings/          # Settings components
│   │   └── ui/                # UI components (Navbar, etc.)
│   ├── contexts/              # React Context
│   │   └── AuthContext.tsx    # Authentication context
│   ├── data/                  # Mock data
│   │   ├── mockData.ts        # Patient & test data
│   │   ├── mockUsers.ts       # User data
│   │   └── analyticsData.ts   # Analytics data
│   ├── hooks/                 # Custom React hooks
│   ├── types/                 # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/                 # Utility functions
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # Entry point
│   ├── firebase.ts            # Firebase configuration
│   └── index.css              # Global styles
├── .env.example               # Environment variables template
├── .gitignore                 # Git ignore rules
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
├── vercel.json                # Vercel deployment config
└── README.md                  # This file
```

---

## 👥 User Roles

ZenSoar implements role-based access control with three distinct roles:

| Role | Permissions | Dashboard Features |
|------|------------|-------------------|
| **👨‍💼 Admin** | Full system access | User management, analytics, system settings, overview statistics |
| **🔬 Lab Scientist** | Test management & results entry | Assigned tests, result entry, pending reviews, quality control |
| **📋 Receptionist** | Patient & appointment management | Patient registration, scheduling, billing, contact management |

Each role has a dedicated dashboard with tailored functionality and access controls enforced at the route level.

---

## 💻 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint

# Type check without emitting files
npm run typecheck
```

### Code Quality

- **TypeScript Strict Mode:** Enabled for maximum type safety
- **ESLint:** Configured with React hooks rules
- **No Type Errors:** Clean TypeScript compilation

### Architecture

```
┌─────────────────────────────────────┐
│   React 19 + TypeScript (Frontend)  │
└─────────────────┬───────────────────┘
                  │
    ┌─────────────┴─────────────┐
    │                           │
┌───▼────────────┐  ┌──────────▼────────┐
│ Firebase Auth  │  │  Context API      │
│ (Role-based)   │  │  (State Mgmt)     │
└────────────────┘  └───────────────────┘
                  │
    ┌─────────────┴─────────────┐
    │                           │
┌───▼────────────┐  ┌──────────▼────────┐
│  Material-UI   │  │   Tailwind CSS    │
│  Components    │  │   (Styling)       │
└────────────────┘  └───────────────────┘
```

---

<!--
## 📸 Screenshots

### Login Screen
![Login Screen](screenshots/login.png)

### Admin Dashboard
![Admin Dashboard](screenshots/admin-dashboard.png)

### Lab Scientist Workflow
![Lab Scientist](screenshots/lab-scientist.png)

### Receptionist Interface
![Receptionist](screenshots/receptionist.png)
-->

---

## 🗺 Roadmap

### ✅ Completed
- ✓ Role-based authentication with Firebase
- ✓ Responsive dashboards for all three roles
- ✓ Mock data infrastructure
- ✓ Interactive analytics with charts
- ✓ System settings panel
- ✓ User management interface

### 🚧 In Progress / Planned

#### **UX & Performance**
- [ ] Dark mode with theme persistence
- [ ] Loading states & skeleton screens
- [ ] Form validation with error handling
- [ ] Keyboard shortcuts for quick actions
- [ ] Optimized rendering with React.memo

#### **Data & Operations**
- [ ] Backend integration (Firebase Firestore or REST API)
- [ ] Bulk operations with Excel/PDF export
- [ ] Advanced search and filtering
- [ ] Virtual scrolling for large datasets
- [ ] Audit trail for compliance logging
- [ ] Real data persistence

#### **Real-time & Collaboration**
- [ ] WebSocket notifications for test results
- [ ] Multi-user editing with live updates
- [ ] Appointment calendar with drag-and-drop
- [ ] Real-time patient status updates

#### **AI & Analytics**
- [ ] Predictive analytics for lab operations
- [ ] Automated quality control workflows
- [ ] Custom BI dashboard builder
- [ ] Machine learning for test result patterns

#### **Testing & Quality**
- [ ] Unit tests with Jest/Vitest
- [ ] Integration tests with React Testing Library
- [ ] E2E tests with Playwright/Cypress
- [ ] Accessibility compliance (WCAG 2.1)

---

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Quick Start for Contributors

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Kachi**

- GitHub: [@yourusername](https://github.com/yourusername)
- Live Demo: [zen-soar-uadq.vercel.app](https://zen-soar-uadq.vercel.app/)

---

## 🙏 Acknowledgments

- Inspired by real-world laboratory information management systems (LIMS)
- Built as a demonstration of modern React architecture and best practices
- UI design based on Material Design principles

---

## ⚠️ Disclaimer

This is a **demo/portfolio project** with shared demo credentials. Do not use for production or store any sensitive/real patient data. The application uses mock data and is intended for demonstration purposes only.

---

<div align="center">

**[⬆ Back to Top](#-zensoar---diagnostic-laboratory-management-system)**

Made with ❤️ by Kachi

</div>
