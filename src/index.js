import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import RegisterForm from './vievs/RegisterForm/RegisterForm';
import GamePage from './vievs/GamePage/GamePage';

// ========================================

function MemoryGame() {
  return (
    <div>
      <RegisterForm></RegisterForm>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(MemoryGame());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
