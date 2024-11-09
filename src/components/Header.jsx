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
          <NavLink to="About">About
          <NavLink to="Projects">Projects
          <NavLink to="Skills">Skills
          <NavLink to="Contact">Contact
        </ul>
      </nav>
    </header>
  );
};

export default Header;
