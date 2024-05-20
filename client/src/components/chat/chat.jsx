import React from "react";
import "./chat.scss";

function Chat({setOpenChat}) {
  return (
    <div className="chat">
      <div className="head">
        <img
          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <span>John Doe</span>
        <div className="close" onClick={() => setOpenChat(false)}>
          X
        </div>
      </div>
      <div className="body">
        <div className="message">
          <p>Lorem ipsum dolor sit amet</p>
          <span className="date"> 1 hour ago</span>
        </div>
        <div className="message own">
          <p>Lorem ipsum dolor sit amet</p>
          <span className="date"> 1 hour ago</span>
        </div>
        <div className="message">
          <p>Lorem ipsum dolor sit amet</p>
          <span className="date"> 1 hour ago</span>
        </div>
        <div className="message own">
          <p>Lorem ipsum dolor sit amet</p>
          <span className="date"> 1 hour ago</span>
        </div>
        <div className="message">
          <p>Lorem ipsum dolor sit amet</p>
          <span className="date"> 1 hour ago</span>
        </div>

        <div className="message own">
          <p>Lorem ipsum dolor sit amet</p>
          <span className="date"> 1 hour ago</span>
        </div>

        <div className="message own">
          <p>Lorem ipsum dolor sit amet</p>
          <span className="date"> 1 hour ago</span>
        </div>

        <div className="message own">
          <p>Lorem ipsum dolor sit amet</p>
          <span className="date"> 1 hour ago</span>
        </div>
      </div>
      <div className="bottom">
        <textarea cols={1} rows={1} name="" id=""></textarea>
        <button>Send</button>
      </div>
    </div>
  );
}

export default Chat;
