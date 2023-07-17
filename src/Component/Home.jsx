import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [backgroundColor, setBackgroundColor] = useState('');
  const [h1Color, setH1Color] = useState('');

  const handleColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    document.getElementById('form').style.backgroundColor = backgroundColor;
    setH1Color(backgroundColor);
  };

  return (
    <div className="Home">
      <h1 style={{ color: h1Color, }}>Color Picker</h1>
      <div className="form-container">
        <form id="form" style={{ padding: 40}}>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" />
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" />
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" />
          <label htmlFor="colorPicker">Select a color:</label>
          <input
            type="color"
            id="colorPicker"
            value={backgroundColor}
            onChange={handleColorChange}
          />
          <button type="button" onClick={handleButtonClick}>
            Change Color
          </button>
        </form>
      </div>
    </div>
  );
};
export default Home;