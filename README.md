# 📊 Crypto Currency Tracker

A dynamic cryptocurrency tracker built with **React** and **Redux Toolkit**, simulating real-time price updates and displaying key market stats like price, market cap, volume, and 7-day trends.

---

## 📁 Folder Info

⚠️ **Note**: Only the `src` folder is uploaded.  
To run the project, you'll need to set up a basic React project first using the instructions below.

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
├── App.js                    # Main app entry point
├── CryptoTable.js            # Table UI with crypto data
├── CryptoUpdater.js          # Simulates live price updates
├── CryptoTable.css           # Styling for the table
├── store/
│   ├── store.js              # Redux store configuration
│   └── cryptoSlice.js        # Redux slice with state and reducers
└── sampleData.js             # Sample mock data for crypto assets
```

---

## ⚙️ Setup Instructions

Since you only pushed the `src` folder, follow these steps to get your project running:

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

- Delete the existing `src/` folder in your React app.
- Copy your uploaded `src/` folder into the project.

4. **Run the App**
```bash
npm start
```

You should see your Crypto Price Tracker running at `http://localhost:3000`

---

## 🚀 Features

- Price updates every 1.5 seconds
- Color-coded percentage changes with arrows
- Market cap, volume, and circulating supply shown
- 7-day performance mini chart

---
