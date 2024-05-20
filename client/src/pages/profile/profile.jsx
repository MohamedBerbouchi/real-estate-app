import "./profile.scss";
//
import React, { useState } from "react";
import Chat from "../../components/chat/chat";
import List from "../../components/list/list";
import { userData } from "../../lib/dummydata";

function Profile() {
  const [openChat, setOpenChat] = useState(false);

  return (
    <div className="profile">
      <div className="left">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>

          <div className="user_info">
            <div className="row">
              <span>Avatar :</span>
              <img src={userData.img} alt="" className="user_img" />
            </div>
            <div className="row">
              <span>Username :</span>
              <span>{userData.name}</span>
            </div>
            <div className="row">
              <span>E-mail :</span>
              <span>john.doe@gmail.com</span>
            </div>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>create new post</button>
          </div>
          <List />

          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <div className="messages">
            <h2>Messages</h2>
            <div className="message" onClick={()=> setOpenChat(true)}>
              <img src={userData.img} alt="" className="user_img" />
              <div className="username">john doe</div>
              <p className="msg">Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
              <img src={userData.img} alt="" className="user_img" />
              <div className="username">john doe</div>
              <p className="msg">Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
              <img src={userData.img} alt="" className="user_img" />
              <div className="username">john doe</div>
              <p className="msg">Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
              <img src={userData.img} alt="" className="user_img" />
              <div className="username">john doe</div>
              <p className="msg">Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
              <img src={userData.img} alt="" className="user_img" />
              <div className="username">john doe</div>
              <p className="msg">Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
              <img src={userData.img} alt="" className="user_img" />
              <div className="username">john doe</div>
              <p className="msg">Lorem ipsum dolor sit amet...</p>
            </div>
          </div>
          {openChat && <div className="chat_container">
             <Chat setOpenChat={setOpenChat} />
          </div>}
        </div>
      </div>
    </div>
  );
}

export default Profile;
