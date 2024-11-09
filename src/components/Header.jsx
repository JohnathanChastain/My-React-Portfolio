import 'react';
import { NavLink } from "react-router-dom";
import '../styles/Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Johnathan Chastain</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><NavLink to="About">About</li>
          <li><NavLink to="Projects">Projects</li>
          <li><NavLink to="Skills">Skills</li>
          <li><NavLink to="Contact">Contact></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
