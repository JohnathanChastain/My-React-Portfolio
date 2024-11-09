import 'react';
import '../styles/Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Johnathan Chastain</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="About">About</a></li>
          <li><a href="Projects">Projects</a></li>
          <li><a href="Skills">Skills</a></li>
          <li><a href="Contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
