import React, { useState } from "react";
import Map from "../../components/map/map";
import Slider from "../../components/slider/slider";
import { singlePostData, userData } from "../../lib/dummydata";
import axiosClient from "../../lib/axiosClient";
import {useUser} from '../../context/AuthContext'
import "./singlePage.scss";
import {
  useLoaderData,
  useSearchParams,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { toast } from "react-toastify";
import DOMPurify from "dompurify";
function SinglePage() {
  const postData = useLoaderData();
  const {user} = useUser()
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSaved, setIsSaved] = useState(postData.data.isSaved);

  if (!postData.ok) {
    toast.error("Failed to fetch post");
    return <Navigate to={"/"} />;
  }
  const toggleSavePost = async () => {
    setIsSaved((prev) => !prev);
    try {
      const savedPost = await axiosClient.post("/users/savePost", {
        postId: postData.data.id,
      });
      console.log(savedPost);
    } catch (err) {
      console.log(err);
      setIsSaved((prev) => !prev);
      toast.error("something wen wrong ⚠️");
    }
  };
  console.log(postData);
  console.log(isSaved);
  console.log(postData.data.userId);
  const navigate = useNavigate();
  console.log('user',postData.data.user.id)
  console.log('user',user)
  const createChat = async () => {
    // postData.data?.user
    if(!user) return
    if(postData.data.user.id === user.id) return
    try {
      const chat = await axiosClient.post("/chats", {
        receiverId: postData.data.userId,
      });

      navigate(`/profile?chat=${chat.data.id}`);
    } catch (err) {
      console.log(err)

    }
  };
  return (
    <div className="singlepage">
      <div className="left">
        <div className="wrapper">
          <Slider images={postData.data.images} />
          <div className="post_content">
            <div className="info">
              <h1>{postData.data.title}</h1>
              <div className="address">
                <img src="/pin.png" alt="" />
                {postData.data.address}
              </div>
              <div className="price">$ {postData.data.price}</div>
            </div>
            <div className="user">
              <img src={postData.data?.user?.avatar || "noavatar.jpg"} alt="" />
              <div className="name">{postData.data?.user?.username}</div>
            </div>
          </div>
          <div
            className="desc"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(postData.data.PostDetail.desc),
            }}
          ></div>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2 className="title">General</h2>
          <div className="vertical_boxes">
            <div className="box">
              <img src="/utility.png" alt="" />
              <div className="box_content">
                <h3>Utilities</h3>
                <p>{postData.data.PostDetail.utilities}</p>
              </div>
            </div>
            <div className="box">
              <img src="/pet.png" alt="" />
              <div className="box_content">
                <h3>Pet Policy</h3>
                <p>Pets {postData.data.PostDetail.pet}</p>
              </div>
            </div>
            <div className="box">
              <img src="/fee.png" alt="" />
              <div className="box_content">
                <h3>Property Fees</h3>
                <p>{postData.data.PostDetail.income}</p>
              </div>
            </div>
          </div>
          <h2 className="title">Sizes</h2>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>{postData.data.PostDetail.size} sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>{postData.data.bedroom} beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>{postData.data.bathroom} bathroom</span>
            </div>
          </div>
          <h2 className="title">Nearby Places</h2>
          <div className="horizental_boxes">
            <div className="box">
              <img src="/school.png" alt="" />
              <div className="box_content">
                <h3>School</h3>
                <p>{postData.data.PostDetail.school}m away</p>
              </div>
            </div>
            <div className="box">
              <img src="/pet.png" alt="" />
              <div className="box_content">
                <h3>Bus Stop</h3>
                <p>{postData.data.PostDetail.bus}m away</p>
              </div>
            </div>
            <div className="box">
              <img src="/fee.png" alt="" />
              <div className="box_content">
                <h3>Restaurant</h3>
                <p>{postData.data.PostDetail.restaurant}m away</p>
              </div>
            </div>
          </div>
          <h2 className="title">Location</h2>
          <div className="map_container">
            <Map items={[postData.data]} />
          </div>
          <div className="buttons">
           {postData.data.user.id !== user.id && <button onClick={createChat}>
              <img src="/chat.png" alt="" />
              <span>Send a Message</span>
            </button>}
            <button onClick={toggleSavePost} className={isSaved ? "saved" : ""}>
              <img src="/save.png" alt="" />
              <span>{isSaved ? "place saved" : "save the place"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
