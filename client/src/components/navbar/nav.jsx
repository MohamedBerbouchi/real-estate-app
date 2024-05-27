import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userData } from "../../lib/dummydata";
import "./nav.scss";
import axiosClient from "../../lib/axiosClient";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const [open, setOpen] = useState(false);
   const {user} = useContext(AuthContext)

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
            <Link to='/login'>
            <button>
              Sign in
              </button>
            </Link>
            <Link to='/register'>
            <button>
              Sign up
              </button>
            </Link>

           
          </>
        )}
        {user && <div className="profile">
        <img src={user.avatar || '/noavatar.jpg'} alt="" className="user_img" />
        <h2 className="username">{user.username}</h2>
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
        <div className="menu" onClick={() => setOpen(!open)}>
              <img src="/menu.png" alt="" />
            </div>
      </div>
    </nav>
  );
}

export default Navbar;
