import "./profile.scss";
//
import React, {
  startTransition,
  useContext,
  useEffect,
  useState,
  useTransition,
} from "react";
import Chat from "../../components/chat/chat";
import List from "../../components/list/list";
import { userData } from "../../lib/dummydata";
import {
  Link,
  useLoaderData,
  useNavigate,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import axiosClient from "../../lib/axiosClient";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

function Profile() {
  const [chat, setChat] = useState(null);
  const [searchParams] = useSearchParams()
  const [isPending, startTranstaction] = useTransition();
  const { user } = useContext(AuthContext);
  const profile_data = useLoaderData();
  const navigate = useNavigate("/");
  const { setUser } = useContext(AuthContext);
  async function handleSignOut() {
    try {
      startTranstaction(async () => {
        await axiosClient.post("/auth/logout");
      });
      // localStorage.removeItem("user");
      setUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  const { state } = useNavigation();
  const handleOpenChat = async (chat) => {
    console.log(chat);
    const reciever = chat.users.find((u) => u.id !== user.id);
    try {
      const getChat = await axiosClient.get(`/chats/${chat.id}`);
      console.log(getChat);
      setChat({...getChat.data,reciever});
    } catch (err) {
      console.log(err);
      toast.error('cant open chat')
      setChat(null);
    }
  };
  console.log(user)
  useEffect(()=>{
   
    
    if(searchParams.get('chat')){

      // get chat
      getChat(searchParams.get('chat')) 
    }
  },[])

  async function getChat(id){
    console.log(id)
    try {
      const chatD = await axiosClient.get("/chats/"+id);
      console.log(chatD)
      setChat(chatD.data)
    } catch (err) {
      console.log(err)

    }
  } 
  return (
    <div className="profilePage">
      <div className="left">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to={"/profile/update"}>
              <button>Update Profile</button>
            </Link>
          </div>

          <div className="user_info">
            <div className="row">
              <span>Avatar :</span>
              <img
                src={user.avatar || "/noavatar.jpg"}
                alt=""
                className="user_img"
              />
            </div>
            <div className="row">
              <span>Username :</span>
              <span>{user.username}</span>
            </div>
            <div className="row">
              <span>E-mail :</span>
              <span>{user.email}</span>
            </div>
            <button
              disabled={isPending}
              className="signout"
              onClick={handleSignOut}
            >
              sign out
            </button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to={"/post/create"}>
              <button>create new post</button>
            </Link>
          </div>
         <List items={profile_data?.postsData.userPosts} />

          <div className="title">
            <h1>Saved List</h1>
          </div>
         <List items={profile_data?.postsData.savedPosts} />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <div className="messages">
            <h2>Messages</h2>
            {profile_data.chatsData.map((chat) => {
              const reciever = chat.users.find((u) => u.id !== user.id);
              console.log(reciever)
              const seenBy = chat.seenBy.includes(user.id)
              return (
                <div className={`message ${seenBy ? '' : 'not-seen'}`} onClick={() => handleOpenChat(chat)}>
                  <img
                    src={reciever?.avatar || "noavatar.jpg"}
                    alt=""
                    className="user_img"
                  />
                  <div className="username">{reciever?.username}</div>
                  <p className="msg">{chat.lastMessage}</p>
                </div>
              );
            })}
          </div>
          {chat && (
            <div className="chat_container">
              <Chat chat={chat} setChat={setChat}  />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
