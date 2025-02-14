# Study MBBS Abroad - Responsive Landing Page

## 📌 Project Overview
This project is a responsive landing page for "Study MBBS Abroad," built using **Next.js, Tailwind CSS, and TypeScript**. It features country listings, program details, and a lead generation form with validation and API integration.

## 🚀 Features
- **Fully Responsive Design** using Tailwind CSS
- **Lead Generation Form** with validation
- **Server-side API** for form submission
- **SEO Optimization**
- **Google Analytics & Facebook Pixel Integration**
- **Fast Loading and Performance Optimization**

---
## 🛠️ Tech Stack
- **Next.js** (Framework for React)
- **TypeScript** (Strongly-typed JavaScript)
- **Tailwind CSS** (For styling)
- **React Hook Form** & **Yup** (For form validation)

---
## 🏗️ Setup & Installation
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/mbbs-landing.git
cd mbbs-landing
```
### 2️⃣ Install Dependencies
```bash
npm install   # or yarn install
```
### 3️⃣ Run the Development Server
```bash
npm run dev   # or yarn dev
```
🚀 Open [http://localhost:3000](http://localhost:3000) to view the project.

---
## 📤 API Endpoint
### Form Submission (`/api/submit`)
- **Method:** `POST`
- **Body Parameters:**
  ```json
  {
    "name": "ayush",
    "email": "ayush@example.com",
    "phone": "1234567890",
    "country": "Russia"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Form submitted successfully"
  }
  ```

---
## 🔍 SEO & Analytics Integration
1. **Google Analytics:** Add your tracking ID in `pages/_app.tsx`.
2. **Facebook Pixel:** Place the tracking script in `_app.tsx`.

---
## ✅ Deployment
### Deploy on Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
🔗 After deployment, get your live URL and share it!

---
## 📞 Contact
For any queries, reach out via [ayush.tesla@gmail.com](mailto:ayush.tesla@gmail.com)

