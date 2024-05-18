import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
function Navbar() {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo link">
          <img src="/logo.png" alt="" />
          <span>MinaEstate</span>
        </Link>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/" className="link">
          About
        </Link>
        <Link to="/" className="link">
          Contact
        </Link>
        <Link to="/" className="link">
          Agents
        </Link>
      </div>
      <div className="right">
        <button>Sign in</button>
        <button>Sign up</button>
        <div className="menu" onClick={() => setOpen(!open)}>
          <img src="/menu.png" alt="" />
        </div>
        <div className={open ? "mobile_menu active" : "mobile_menu"}>
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/" className="link">
            About
          </Link>
          <Link to="/" className="link">
            Contact
          </Link>
          <Link to="/" className="link">
            Agents
          </Link>
          <Link to="/" className="link">
            Sign in 
          </Link>
          <Link to="/" className="link">
           Sign up
          </Link>
        </div>
     
      </div>
    </nav>
  );
}

export default Navbar;
