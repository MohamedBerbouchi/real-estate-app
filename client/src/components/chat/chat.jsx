import React, { useEffect, useRef, useState } from "react";
import "./chat.scss";
import { useUser } from "../../context/AuthContext";
import { format } from "timeago.js";
import axiosClient from "../../lib/axiosClient";
import { useSocket } from "../../context/SocketContext";

function Chat({setChat, chat}) {
  const {user} = useUser()
  const lastMessageRef = useRef()
  const [message, setMessage] = useState('')
  const {socket} = useSocket()

  const sendMassage =async (receiver= 'jjjj')=>{
 
  
    if (!message) return;
      try{
      const res =  await axiosClient.post(`/message/${chat.id}`,{
        text: message
       })
       setChat({...chat, messages:[...chat.messages, res.data]})
       socket.emit('sendMessage',{
        receiverId: chat.reciever.id,
        data: res.data
      })
      setMessage('')
      }catch(err){
        console.log(err)
      }
  }

  useEffect(()=>{
   
      socket.on('getMessage', (data)=>{
        if(chat.id === data.chatId){
          setChat({...chat,  messages:[...chat.messages, data]})
        }
      })
    return () => {
      socket.off("getMessage");
    };
  }, [chat, socket])

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
        <textarea cols={1} rows={1} name="" id="" onChange={handleChange} value={message}></textarea>
        <button onClick={sendMassage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
