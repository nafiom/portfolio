# 🌐 Nafy Portfolio

Welcome to **Nafy’s Portfolio**, a modern and elegant personal website showcasing web development projects, skills, and contact functionalities. This project combines clean UI/UX design with functional back-end processing using PHP and PHPMailer.

---

## 📂 Structure Overview

portfolio/
├── index.html
├── about.html
├── contact.html
├── projects.html
├── process_contact.php
├── PHPMailer/
├── style.css
├── script.js
└── assets/

---

## 🚀 Pages Description

### 🔷 `index.html`
The landing page of the portfolio:
- Clean and modern design.
- Contains an introduction about Nafy, a passionate web developer.
- Links to **About**, **Projects**, and **Contact** sections.
- Interactive call-to-action buttons and profile picture.

### 🔷 `about.html`
A detailed introduction:
- Showcases academic background in full-stack web development.
- Highlights experience with projects like **ECORIDE** (carpooling platform) and a **modern e-commerce site**.
- Describes UI/UX design philosophy focusing on clarity, functionality, and user engagement.

### 🔷 `projects.html`
A curated gallery of Nafy’s projects:
- **ECORIDE**: Full-featured carpooling platform with real-time maps, role-based access, and notifications.
- **E-commerce**: Modern homepage design with animations, responsive layout, and elegant product displays.
- Includes project descriptions, technologies used, and links to view live versions.

### 🔷 `contact.html`
A user-friendly contact form:
- Fields: Name, Email, Message.
- Form submission handled by `process_contact.php`.
- Utilizes HTML form validation.
- Accessible via `https://nafiportfolio.fr/contact.html`.

---

## 💌 `process_contact.php`
The back-end processor for contact form submissions:
- **Validates and sanitizes input** (Name, Email, Message).
- Uses **PHPMailer** to send:
  - An email to the website owner (Nafy) with the user’s message.
  - A confirmation email to the user acknowledging receipt.
- Ensures secure mail handling with Gmail SMTP (credentials managed securely).
- Blocks unauthorized access via HTTP GET (only allows POST).

---

## 🛡️ Security Measures
- HTTPS enforced via `.htaccess`.
- `.htaccess` blocks direct access to sensitive files 
- Permissions and security headers configured.

---


## 👨‍💻 Technologies Used
- **HTML5, CSS3** – Responsive layouts and modern design.
- **JavaScript** – Navigation and dynamic interactions.
- **PHP** – Secure back-end for form processing.
- **PHPMailer** – Robust mailing with Gmail SMTP.
- **Google Fonts & RemixIcon** – Clean typography and icons.

---

## 🔗 Live Preview
🌐 [https://nafiportfolio.fr](https://nafiportfolio.fr)  

---




