import "./profileUpdate.scss";
//
import React, { startTransition, useContext, useState, useTransition } from "react";
import Chat from "../../components/chat/chat";
import List from "../../components/list/list";
import { userData } from "../../lib/dummydata";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../lib/axiosClient";
import { AuthContext } from "../../context/AuthContext";

function ProfileUpdate() {
  const [error, setError] = useState('')
  const {user} = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  async function handleSubmit(){

  }
  return (
    <div className="profilePageUpdate">
      <div className="left">
        <div className="wrapper">
        <h1>Update Profile</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Username
        <input name='username' type="text" placeholder='username...' defaultValue={user.username} />
        </label>
        <label htmlFor="">Email 

        <input name='email' type="email" placeholder='email...' defaultValue={user.email} />
        </label>
        <label htmlFor="">Password 

        <input name='password' type="password" placeholder='password...' />
        </label>
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
