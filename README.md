# SecondHand 🛒 - Marketplace for Buying & Selling Used Items

## Project Overview
Welcome to **SecondHand**, a user-friendly web application designed to enable users to buy and sell used items seamlessly. The platform provides a smooth and secure experience for users to post listings, browse products, communicate with sellers, and make transactions. Whether you're looking to sell an old item or buy something used, SecondHand makes the process easy and reliable.

## Live Link
You can explore the live version of the project here:  
[**SecondHand Marketplace - Live Demo**](https://assignment-6-client-seven.vercel.app/)

## Roles

- **User (Single Role)**: A unified role where users can both buy and sell items.
- **Admin (Optional)**: Can manage users and listings.

## Key Features

### **User Authentication**
- **Custom login system** using email/phone number and password.
- **JWT (JSON Web Token)** for secure authentication.
- **Password hashing** using bcrypt for enhanced security.

### **User Dashboard**
- **Post an Item for Sale:** Users can list used items with descriptions, images, pricing, and categories.
- **Manage Listings:** Update or remove item listings.
- **Track Sales & Purchases:** View purchase and sales history.
- **Profile Management:** Edit personal details.
- **Wishlist Feature:** Save items for later.

### **Listings and Search**
- **List Items for Sale:** Sellers can provide details such as price, condition, images, and category.
- **Search & Filter:** Users can search items based on category, price, condition, and location.
- **Mark as Sold:** Sellers can update the status of an item once it’s sold.

### **Communication & Transactions **
- **Messaging System:** Buyers can chat with sellers before making a purchase.
- **Order Management:** Users can track their sold/purchased items.

### **Admin Features **
- **User Management:** Admins can ban/unban users.
- **Listing Management:** Admins can delete inappropriate listings.

## Tech Stack

### **Frontend:**
- **Next.js** (for SSR/SSG)
- **TypeScript** (for type safety)

### **Backend:**
- **Express.js** (REST API)
- **MongoDB** (for user and product data storage)
- **JWT** (authentication)
- **bcrypt** (password hashing)

### **Deployment:**
- **Frontend:** Vercel, Netlify
- **Backend:** Vercel, Railway

## Frontend Requirements

### **User Routes:**
- **Home Page (/)** – Overview of available items.
- **Login Page (/login)** – Authenticate users.
- **Products Page (/products)** – Browse all listings.
- **User Dashboard (/dashboard)**
  - **Track Purchases (/dashboard/purchase-history)** – View order history.
  - **Manage Listings (/dashboard/listing)** – Create, update, delete listings.
  - **Track Sales (/dashboard/sales-history)** – View sales inquiries.
  - **Profile (/dashboard/profile)** – Edit personal details.
  - **Messages (/messages)** – Direct communication between buyers and sellers (optional).

### **Admin Routes:**
- **Admin Dashboard (/dashboard/admin)** – Admin panel.
- **User Management (/dashboard/admin/user-management)** – Ban/unban users.
- **Listings Management (/dashboard/admin/listings)** – Delete or review listings.

## Backend Requirements

### **Database Collections (MongoDB):**
- **Users Collection**  
  - Fields: name, email, phone number, password (hashed), role.
- **Listings Collection**  
  - Fields: title, description, price, condition, images, userID (seller), status (available/sold).
- **Transactions Collection**  
  - Fields: buyerID, sellerID, itemID, status (pending/completed).
- **Messages Collection (Optional)**  
  - Fields: senderID, receiverID, message, timestamp.

### **API Endpoints (CRUD Operations):**

#### **Authentication:**
- **POST /auth/register** – Register a new user.
- **POST /auth/login** – User login.
- **POST /auth/logout** – Logout user.

#### **Listings:**
- **GET /listings** – Retrieve all available listings.
- **GET /listings/:id** – Retrieve details of a specific listing.
- **POST /listings** – Create a new product listing.
- **PUT /listings/:id** – Update listing details.
- **DELETE /listings/:id** – Remove a listing.

#### **User Management:**
- **GET /users/:id** – Retrieve user details.
- **PUT /users/:id** – Update user profile.
- **DELETE /users/:id** – Delete user account.

#### **Transactions & Purchases:**
- **GET /purchases/:userId** – Fetch purchase history.
- **GET /sales/:userId** – Fetch sales history.
- **POST /transactions** – Create a new transaction.
- **PUT /transactions/:id** – Update transaction status.







## Additional Features
- **Email Notifications:**
  - **For Buyers:** When a seller responds to their inquiry.
  - **For Sellers:** When they receive a new inquiry.
- **Role-Based Access Control:** Buyers and sellers have equal access; optional admin role for moderation.


