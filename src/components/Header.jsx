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
        <div className="nav-links">
          <NavLink to="About">About</NavLink>
          <NavLink to="Projects">Projects</NavLink>
          <NavLink to="Skills">Skills</NavLink>
          <NavLink to="Contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
