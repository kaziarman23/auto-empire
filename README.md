# 🚗 **Auto Empire**

_Auto Empire is a premium platform where users can explore, buy, and manage **racing** and **luxury cars**. Built with modern technologies, it offers seamless user and admin experiences with secure payments via **SSL-COMMERZ**._

---

## 🌟 **Project Purpose**

The purpose of this project is to demonstrate development skills and deliver an elegant solution for car enthusiasts and sellers. It offers a complete e-commerce flow tailored for high-end automotive purchases.

---

## 💡 **Key Features**

- **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.
- **Authentication System:** Email/password login, Google login, password recovery, and protected routes.
- **Car Listings:** Add, update, delete, and view car listings.
- **Advanced Filters:** Search by brand, type (racing/luxury), price range, and availability.
- **Booking & Purchase:** Reserve or directly purchase cars through a secure checkout.
- **User Dashboard:** View orders, saved cars, and manage personal information.
- **Admin Dashboard:** Manage users, cars, and orders with advanced control.
- **Secure Payments:** Integrated with **bKash** for safe and smooth transactions.
- **Notifications:** Instant feedback on user actions with toasts and alerts.

---

## 🖌️ **Application Pages**

### 🧭 Public Pages

- **Home Page (/):** Showcase featured racing and luxury cars with dynamic routing to car details.
- **Car Details (/cars/:id):** View car specifications, images, and purchase/book options.
- **Login/Register (/login):** Secure authentication for users and admins.

### 🔒 Protected Pages

- **Dashboard (/dashboard):** Role-based dashboard (user/admin).
- **User Dashboard (/dashboard/user):** Order history, profile management, saved cars.
- **Admin Dashboard (/dashboard/admin):** Car management, order reviews, user control.
- **Add Car (/dashboard/admin/add-car):** Add new cars to the system.
- **Update Car (/dashboard/admin/edit-car/:id):** Update existing car details.
- **Orders Management (/dashboard/admin/orders):** View and manage customer orders.

---

## 🏗️ **Architecture**

- **Navbar:** Brand logo, navigation links, user profile dropdown.
- **Footer:** Company info, social links, and policies.
- **Routing:** Dynamic and protected routing via Next.js 15 App Router.
- **API Layer:** RESTful APIs built with secure data handling practices.

---

## 🛠️ **Technologies Used**

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS, DaisyUI
- **State Management:** Redux Toolkit / Redux RTK Query
- **Authentication:** Firebase Auth, Google Login
- **Database:** MongoDB
- **Payment Integration:** bKash API
- **Hosting/CI:** Vercel
- **Version Control:** GitHub

---

## ✅ **Feature Checklist**

### **Authentication & Security**
- [x] Email/password login & registration
- [x] Google authentication
- [x] Role-based access (user/admin)
- [x] Protected routes
- [x] JWT session management

### **Car Management**
- [x] Add/update/delete car listings (admin)
- [x] Search, filter, and view cars (user)
- [x] Responsive UI with car specs and pricing

### **Booking & Purchase**
- [x] Booking cars before purchase
- [x] Checkout with bKash payment
- [x] View and manage past orders

### **Dashboards**
- [x] Separate user and admin dashboards
- [x] Role-specific controls and analytics
- [x] Live order and car management

---

## 🧠 **Best Practices Followed**

### 📦 **Code Structure**
- Modular, reusable components
- Consistent naming conventions (camelCase, PascalCase)
- Organized folder structure (components, pages, services, utils)

### 🔐 **Security**
- JWT authentication and route protection
- Server-side validation and sanitization
- Secure environment variable management via `.env`

### 🎯 **Performance**
- Lazy loading and code splitting
- Optimized image delivery and car card rendering
- Efficient state management with caching

### 🧪 **Testing & Reliability**
- Manual testing of all major user flows
- Validation on both frontend and backend
- Simulated error states for robustness

### 📱 **Responsive Design**
- Mobile-first design using Tailwind CSS
- Accessible UI with ARIA roles and keyboard navigation

---

## 🚀 **Deployment**

- Hosted on **Vercel**
- Environment variables secured in production
- Error monitoring and logging in place

---

## 📜 **License**

This project is licensed under the **MIT License**.  
Feel free to use, modify, and distribute under the terms of this license.
