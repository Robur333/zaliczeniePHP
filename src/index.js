import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import GamePage from './vievs/GamePage/GamePage';
import LoginForm from './vievs/GamePage/loginForm/LoginForm';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterForm from './vievs/GamePage/RegisterForm/RegisterForm';

// ========================================

function MemoryGame() {
  return (
    <BrowserRouter>
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route path="/Game" element={<GamePage />} />
          <Route path="/SignIn" element={<RegisterForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(MemoryGame());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
