# Lingo Bingo: A Vocabulary Learning Application

## 🎯 Purpose

Lingo Bingo is a fun and interactive language learning application designed to help users expand their vocabulary and improve communication skills in a specific language. With features like vocabulary lessons, tutorials, and audio pronunciation, this app makes learning enjoyable and effective.

## 📸 Project Screenshots

### Project Screenshot 1

<div align="center">
  <img height="300" src="https://i.ibb.co.com/Fq3sgGp/Screenshot-2025-01-08-033203.png" alt="Lingo Bingo Screenshot 1"/>
</div>

### Project Screenshot 2

<div align="center">
  <img height="300" src="https://i.ibb.co.com/SXn8CCZ/Screenshot-2025-01-08-033236.png" alt="Lingo Bingo Screenshot 2"/>
</div>

## ✨ Key Features

- **Interactive Lessons:** Organized vocabulary lessons based on difficulty levels.
- **User Authentication:** Login, register, and Google Sign-In powered by Firebase.
- **Vocabulary Audio:** Hear pronunciations of words for better retention.
- **Dynamic Design:** Fully responsive and animated interface for seamless navigation.
- **Tutorial Videos:** Embedded YouTube videos for language learning.
- **Customizable Profile:** Update user details like name and profile picture.
- **Secure Routes:** Private routes ensure only logged-in users can access specific features.

## ✨ Key Technologies Used

- **Tailwind CSS**: Utility-first CSS framework for custom designs.
- **React**: A JavaScript library for building user interfaces.
- **Firebase**: Real-time database and authentication.
- **React Router DOM**: For handling routing and navigation within the application.

## 📦 npm Packages Used

- **React**: For building the single-page application.
- **React Router DOM**: For handling routing and navigation.
- **React CountUp**: For animated counters on the success metrics.
- **AOS (Animate on Scroll)**: For adding scroll-based animations.
- **React Icons**: For adding icons to enhance the UI.
- **React Toastify**: For displaying error and success messages.

## 📦 Dependencies

- **aos**: "^2.3.4"
- **bootstrap**: "^5.3.3"
- **firebase**: "^11.0.2"
- **localforage**: "^1.10.0"
- **match-sorter**: "^8.0.0"
- **react**: "^18.3.1"
- **react-bootstrap**: "^2.10.5"
- **react-countup**: "^6.5.3"
- **react-dom**: "^18.3.1"
- **react-icons**: "^5.3.0"
- **react-router-dom**: "^6.28.0"
- **react-scroll-trigger**: "^0.6.14"
- **react-toastify**: "^10.0.6"
- **sort-by**: "^1.2.0"
- **swiper**: "^11.1.15"

## 🚀 Technology Stats

<div>
  <img src="https://img.shields.io/badge/React-60%25-blue" alt="React Usage" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-30%25-green" alt="Tailwind CSS Usage" />
  <img src="https://img.shields.io/badge/Firebase-10%25-orange" alt="Firebase Usage" />
</div>

- **React**: 60% of the application logic and UI.
- **Tailwind CSS**: 30% for creating responsive, customizable designs.
- **Firebase**: 10% for authentication and database management.

## 🌐 Live URL

- **Netlify**: https://lingo-bingo.netlify.app
- **Firebase**: https://lingo-bingo-bacc3.web.app

## 💻 Local Setup Guide

Follow these steps to run the project locally:

### 1. Clone the repository

First, clone the project repository to your local machine:

```bash
git clone https://github.com/arifhassansky/lingo-bingo.git
cd lingo-bingo
```

### 2. Install dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Set up environment variables

To configure Firebase and other services, you'll need to set up environment variables. Create a `.env` file in the root of the project and add the following Firebase configuration:

```bash
REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-firebase-app-id
```

Make sure to replace the placeholder values with your actual Firebase configuration.

### 4. Run the project

Once you've installed the dependencies and set up the environment variables, you can run the project locally with the following command:

```bash
npm start
```

This will start the development server and open the application in your browser. You can now explore the Lingo Bingo app locally!



