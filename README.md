# 📊 Crypto Currency Tracker

A dynamic cryptocurrency tracker built with **React** and **Redux Toolkit**, simulating real-time price updates and displaying key market stats like price, market cap, volume, and 7-day trends.

---

## 📁 Folder Info
 
To run the project, set up a basic React project first using the instructions below.

---

## 🧱 Tech Stack

- **React** (UI)
- **Redux Toolkit** (state management)
- **React-Redux** (Redux bindings)
- **CSS** (styling)
- **Mock data simulation** using `setInterval()`

---

## 🧠 Project Architecture

```
src/
├── app/                 
│   ├── store.js            
├── components/
│   ├── cryptoTable.js           
│   └── cryptoTable.css      
├── features   
│   └── cryptoSlice.js
│   └── mockSocket.js
│   └── sampleData.js
├── CryptoUpdater.js   
├── App.js
├── App.css
├── index.js
├── index.css
├── App.test.js
├── setupTests.js
├── .gitignore
```

---

## ⚙️ Setup Instructions

Follow these steps to get your project running:

1. **Create a New React App**
```bash
npx create-react-app crypto-tracker
cd crypto-tracker
```

2. **Install Required Dependencies**
```bash
npm install @reduxjs/toolkit react-redux
```

3. **Replace the `src/` Folder**
- Delete `src/` folder into the project.
- Copy uploaded `src/` folder into the project.


4. **Run the App**
```bash
npm start
```

Crypto Price Tracker running at `http://localhost:3000`

---

## 🚀 Features

- Price updates every 1.5 seconds
- Color-coded percentage changes with arrows
- Market cap, volume, and circulating supply shown
- 7-day performance mini chart

---
