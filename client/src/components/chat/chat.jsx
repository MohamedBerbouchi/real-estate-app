import React, { useEffect, useRef, useState } from "react";
import "./chat.scss";
import { useUser } from "../../context/AuthContext";
import { format } from "timeago.js";
import axiosClient from "../../lib/axiosClient";

function Chat({setChat, chat}) {
  const {user} = useUser()
  const lastMessageRef = useRef()
  const [message, setMessage] = useState('')
  console.log(chat)

  const sendMassage =async ()=>{
    if (!message) return;
      try{
        console.log(chat.id)
      const res =  await axiosClient.post(`/message/${chat.id}`,{
        text: message
       })
       setMessage('')
       setChat({...chat, messages:[...chat.messages, res.data]})

      }catch(err){
        console.log(err)
      }
  }

  const handleChange = (e)=>{
    setMessage(e.target.value)
  }
  useEffect(()=>{
    if(lastMessageRef.current){
      lastMessageRef.current.scrollIntoView()
    }
  },[chat])
  return (
    <div className="chat">
      <div className="head">
        <img
          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <span>John Doe</span>
        <div className="close" onClick={() => setChat(false)}>
          X
        </div>
      </div>
      <div className="body">
        {chat.messages.map(msg=>{
          return (
            <div className={`message ${msg.userId == user.id ? 'own' : ''}`}>
            <p>{msg.text}</p>
            <span className="date"> {format(msg.createdAt)}</span>
          </div>
          )
        })}
        
        <div ref={lastMessageRef}></div>
      </div>
      <div className="bottom">
        <textarea cols={1} rows={1} name="" id="" onChange={handleChange}></textarea>
        <button onClick={sendMassage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
