# 🌟 Hope Haven — Bridging Kindness Through Technology

**Hope Haven** is a full-stack donation platform built during the GDSC Hackathon, aiming to bridge the gap between **donors** and **receivers** using smart, modern, and heartful technology. Whether it's food, clothes, or essentials — we make giving **impactful**, **efficient**, and **human-centered**.

---

## 🔥 Key Highlights

### 🧩 Core Functionalities
- ✅ Donor and Receiver Registration & Login
- 🎯 Smart Donation & Request Forms
- 🛡️ Admin Dashboard for Content & Request Management
- 📡 Real-time Donation Feed & Updates

### ✨ Enhanced Experience
- 🔔 Real-Time Notifications (Donor & Admin)
- 🧍‍♀️ Receiver Stories to Build Empathy
- 📈 Impact Tracker (Meals Served, Items Donated)
- 🚚 Pickup Scheduling and Location Input

### 🤖 ML-Powered Intelligence *(Coming Soon)*
- 📅 Donation Prediction & Reminder System
- 🧠 Smart Matching Engine (based on item type, location, urgency)
- 🥇 Priority Scoring System for Receivers
- 💬 AI Chatbot for Donation Support & FAQs

---

## 🖼️ UI/UX Theme & Screenshots

A **luxury-inspired minimalist design**, with **black backgrounds**, **golden accents**, and **smooth transitions** for a premium, emotionally engaging experience.

| Home Page | Donation Form | Admin Panel | Receiver Story |
|----------|----------------|--------------|----------------|
| ![Home](./screenshots/home.png) | ![Form](./screenshots/form.png) | ![Admin](./screenshots/admin.png) | ![Story](./screenshots/story.png) |

> *(Ensure you add real screenshots in the `./screenshots/` folder)*

---

## 🛠️ Tech Stack

| Layer | Tools |
|-------|-------|
| **Frontend** | Next.js (TypeScript, App Router), TailwindCSS, shadcn/ui |
| **Backend** | Supabase (Auth + PostgreSQL), Next.js API Routes |
| **Machine Learning** | Python (Flask, scikit-learn, TensorFlow) |
| **Design** | Figma (Custom UI Design) |
| **Deployment** | Vercel (Frontend), Render/ Railway (Flask APIs) |

---

## 📦 Getting Started

1. Clone the repository

```bash
git clone https://github.com/your-username/hope-haven.git
cd hope-haven
```
### 2. Setup Environment Variables
Create a .env.local file and add your Supabase keys:

env
Copy
Edit
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
FLASK_API_URL=http://localhost:5000/predict
### 3. Install Dependencies
```bash
npm install
```
### 4. Run the Development Server
```bash
npm run dev
```
Visit http://localhost:3000 to view the app.

##⚙️ Running Flask Backend (ML)
Navigate to the backend directory (e.g., /ml-backend)

Create a virtual environment and install requirements:

```bash
pip install -r requirements.txt
```
Run Flask API:

```bash
python app.py
```
Make sure the Flask server is running on the same port used in .env.local.

##🧪 Testing
✅ Test ML prediction API using Postman

✅ Create donor and receiver accounts

✅ Verify data flow from frontend → backend → Supabase

✅ Monitor Supabase console for real-time updates

##📈 Roadmap
### MVP Web App

 #ML Donation Prediction Model

 AI Chatbot with LangChain or RAG-based system

 NGO/Partner Organization Onboarding

 Mobile App (React Native)

#🤝 Contributing
We welcome PRs and collaboration!

Fork the repo

Create a new branch (feature/xyz)

Commit your changes

Submit a PR

🧠 Learnings & Impact
"Hope Haven taught us how design, technology, and empathy intersect to solve real-world problems. From Supabase to AI — this project was more than code; it was a mission."

📬 Contact
Created by Akshat Jain and Team GDSC

For collaborations or feedback: hopehaven.team@gmail.com

