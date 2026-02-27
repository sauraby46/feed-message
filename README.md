# 🚀 Feed-Message  
### AI-Integrated Full Stack Messaging Platform built with Next.js

Feed-Message is a production-ready full-stack messaging application built using Next.js (App Router).  
The platform includes secure OTP-based authentication, AI-powered message capabilities, scalable MongoDB aggregation APIs, and a modern responsive dashboard.

This project demonstrates real-world implementation of authentication systems, backend API design, validation, database optimization, and AI integration in a modern web application.

---

## 🛠 Tech Stack

**Frontend**
- Next.js (App Router)
- React
- ShadCN UI
- React Hook Form

**Backend**
- Next.js API Routes
- MongoDB
- Aggregation Pipeline

**Authentication**
- Auth.js (NextAuth)
- Custom OTP Verification System

**Validation**
- Zod (Schema-based validation)

**Email Service**
- Resend (OTP email delivery)

**AI Integration**
- AI-powered message generation / enhancement

---

## ✨ Features

### 🔐 Authentication & Security
- Custom OTP-based user signup
- Email verification with secure OTP
- Unique username validation with debouncing
- Auth.js session-based authentication
- Protected routes and user dashboard access

### 📩 Messaging System
- Create, read, and delete messages
- Optimized message retrieval using MongoDB Aggregation Pipeline
- User-specific message dashboard
- Backend delete route implementation

### 📧 Email Workflow
- OTP delivery using Resend email service
- Verification flow integrated with backend API

### 🤖 AI Integration
- AI-powered message generation/enhancement
- Server-side AI API integration inside Next.js

### 🎨 UI/UX
- Responsive dashboard design
- ShadCN modern component library
- Form validation with Zod + React Hook Form
- Debounced real-time username availability check
- Carousel integration

---

## 🧠 Key Learnings

- Building a production-grade full-stack application with Next.js
- Designing secure authentication workflows
- Implementing schema validation for frontend and backend
- Writing scalable APIs with MongoDB aggregation
- Integrating third-party services (Email + AI APIs)
- Managing environment variables and deployment-ready setup
- Debugging and handling real-world feature iterations

---

## 📂 Project Structure Highlights

- App Router architecture
- Separation of Server & Client Components
- Modular API route structure
- Centralized database connection handling
- Environment-based configuration management

---

## 🚀 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/sauraby46/feed-message.git
cd feed-message
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create .env.local file

```bash
MONGODB_URI=your_mongodb_connection_string
AUTH_SECRET=your_auth_secret
RESEND_API_KEY=your_resend_api_key
OPENAI_API_KEY=your_openai_api_key
```

### 4️⃣ Run the development server

```bash
npm run dev
```
