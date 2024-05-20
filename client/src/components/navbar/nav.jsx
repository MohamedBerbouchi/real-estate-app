import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userData } from "../../lib/dummydata";
import "./nav.scss";

function Navbar() {
  const [open, setOpen] = useState(false);
  const user = true;

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
        {!user && (
          <>
            <button>Sign in</button>
            <button>Sign up</button>
            <div className="menu" onClick={() => setOpen(!open)}>
              <img src="/menu.png" alt="" />
            </div>
          </>
        )}
        {user && <div className="profile">
        <img src={userData.img} alt="" className="user_img" />
        <h2 className="username">{userData.name}</h2>
        <div className="button">
          <Link to='/profile' className="profile_link">Profile</Link>
          <span>3</span>
        </div>
        </div>}
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
