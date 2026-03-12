import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <div className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <h1 className="nav-logo">My Portfolio</h1>

        
        <ul className="nav-menu">
          <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Portfolio</Link></li>
          <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
          <li><Link to="/myskills" className={location.pathname === "/myskills" ? "active" : ""}>MySkills</Link></li>
          <li><Link to="/myproject" className={location.pathname === "/myproject" ? "active" : ""}>My Project </Link></li>
          <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
          
          
                 </ul>

      
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

  

      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        <ul>
          <li><Link to="/">Portfolio</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/myproject">My Project</Link></li>
          <li><Link to="/myskills">MySkills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {/* <li><Link to="/footer">Footer</Link></li> */}

        
        </ul>
      </div>

    
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
};

export default Navbar;
