import "./profileUpdate.scss";
//
import React, {
  startTransition,
  useContext,
  useState,
  useTransition,
} from "react";
import Chat from "../../components/chat/chat";
import List from "../../components/list/list";
import { userData } from "../../lib/dummydata";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../lib/axiosClient";
import { AuthContext } from "../../context/AuthContext";
import UploadWidget from "../../components/upload-widget/upload-widget";
import NewUploadWidget from "../../components/upload-widget/new-upload-widget";

function ProfileUpdate() {
  const [error, setError] = useState("");
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState(user.avatar);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.target);
    // console.log(formData.values)
    const data = Object.fromEntries(formData);
    try {
      setLoading(true);
      console.log(data);
      const res = await axiosClient.put(`/users/${user.id}`, {
        ...data,
        avatar
      });
      console.log(res.data);

      setUser(res.data);
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  }
  const uwConfig= {
    cloudName: 'dgfoioz0l',
    uploadPreset: 'simo_real_estate_app',
    folder: "avatars",
    multiple: false,  //restrict upload to a single file
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
  }
  return (
    <div className="profilePageUpdate">
      <div className="left">
        <div className="wrapper">
          <h1>Update Profile</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">
              Username
              <input
                name="username"
                required
                type="text"
                placeholder="username..."
                defaultValue={user.username}
              />
            </label>
            <label htmlFor="">
              Email
              <input
                name="email"
                required
                type="email"
                placeholder="email..."
                defaultValue={user.email}
              />
            </label>
            <label htmlFor="">
              Password
              <input
                name="password"
                type="password"
                placeholder="password..."
              />
            </label>
            <button disabled={loading} type="submit">
              update
            </button>
            {error && <span>{error}</span>}
          </form>
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <img className="avatar" src={avatar  || "/noavatar.jpg"} alt="" />
          {/* <UploadWidget
            uwConfig={{
              cloudName: "dgfoioz0l",
              uploadPreset: "simo_real_estate_app",
              folder: "avatars", //upload files to the specified folder
              // multiple: false,  //restrict upload to a single file
              // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
            }}
            setAssets={setAvatar}
          /> */}
          <NewUploadWidget  setAssets={setAvatar} uwConfig={uwConfig} />
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdate;
