import React from 'react';

import './MainMenu.css';
import inventoryImg from "../../images/INVENTORY.png"

const MainMenu = () => {
  return (
    <div className="main-menu-container">
      <div className="main-menu-content">
      <img src={inventoryImg} alt="Main Menu" className="main-menu-image" />
      </div>
    </div>
  );
};

export default MainMenu;
