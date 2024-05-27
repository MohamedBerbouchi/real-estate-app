import "./profileUpdate.scss";
//
import React, { startTransition, useContext, useState, useTransition } from "react";
import Chat from "../../components/chat/chat";
import List from "../../components/list/list";
import { userData } from "../../lib/dummydata";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../lib/axiosClient";
import { ProfileContext } from "../../context/profileContext";

function ProfileUpdate() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  async function handleSubmit(){

  }
  return (
    <div className="profilePage">
      <div className="left">
        <div className="wrapper">
        <h1>Update Profile</h1>
      <form onSubmit={handleSubmit}>
        <input name='username' type="text" placeholder='username...' />
        <input name='email' type="email" placeholder='email...' />
        <input name='password' type="password" placeholder='password...' />
        <button disabled={loading} type="submit">update</button>
        {error && <span>{error}</span>}

      </form>
        </div>
      </div>

      <div className="right">
      <div className="wrapper">
            <img className="avatar" src="/noavatar.jpg" alt="" />
      </div>
      </div>
    </div>
  );
}

export default ProfileUpdate;
