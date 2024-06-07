import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div>
      <div className="navbar">
        <Link to="/" className="navbar-brand">INVENTORY APPLICATION</Link>
      </div>
      <div className="navbar-item">
        {location.pathname === "/" ? (
          <Link to="/inventory" className="navbar-link menu">SHOW MENU</Link>
        ) : (
          <div className="navbar-link inventory" onClick={toggleDropdown}>
            INVENTORY
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/report" className="dropdown-link view" onClick={closeDropdown}>VIEW INVENTORY</Link>
                <Link to="/add" className="dropdown-link add" onClick={closeDropdown}>ADD</Link>
                <Link to="/edit/:id" className="dropdown-link edit" onClick={closeDropdown}>EDIT</Link>
                <Link to="/delete" className="dropdown-link delete" onClick={closeDropdown}>DELETE</Link>
                <Link to="/" className="dropdown-link close" onClick={closeDropdown}>CLOSE</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
