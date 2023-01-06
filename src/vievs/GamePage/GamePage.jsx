import React from 'react';
import { Link } from 'react-router-dom';
import Cards from '../../components/Cards';
import Navbar from '../../components/Navbar';
import '../../vievs/GamePage/index.css';
const GamePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Cards></Cards>
      <Link to="/">Cofnij do ekranu logowania</Link>
    </div>
  );
};

export default GamePage;
