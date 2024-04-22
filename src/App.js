import './App.css';
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='navback'>
      </div>
      <div className='mid_nav'><h2>Muthukumar</h2></div>
      <div className='navbar'>
        <ul>
          {/* <li><Link to="home" className='home'>Home</Link></li>
          <li><Link to="about" className='about'>About</Link></li>
          <li><Link to="skills" className='skills'>Skills</Link></li>
          <li><Link to="contact" className='contact'>Contact</Link></li> */}

          <li><a href='#home' id=''>Home</a></li>
          <li><a href='#about' id=''>About</a></li>
          <li><a href='#skills' id=''>Skills</a></li>
          <li><a href='#contact' id=''>Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
