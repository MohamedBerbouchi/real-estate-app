import "./createPost.scss";
//
import React, { useContext, useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import axiosClient from "../../lib/axiosClient";
import { AuthContext } from "../../context/AuthContext";
import UploadWidget from "../../components/upload-widget/upload-widget";
import NewUploadWidget from "../../components/upload-widget/new-upload-widget";
import {toast} from 'react-toastify'
function CreatePost() {
  const [error, setError] = useState("");
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    const newPost = {
      post: {
        title: data.title,
        price: parseInt(data.price),
        images: images,
        address:  data.address,
        city: data.city,
        bedroom: parseInt(data.bedroom),
        bathroom: parseInt(data.bedroom),
        latitude: data.latitude,
        longitude: data.longitude,
        type: data.type,
        property: data.property,
      },
      PostDetail: {
        desc: value,
        utilities: data.utilities_policy,
        pet: data.pet,
        income: data.income_policy,
        size: parseInt(data.size),
        school: parseInt(data.school),
        bus: parseInt(data.bus),
        restaurant: parseInt(data.restaurant),
      },
    };
    console.log(newPost)
    setLoading(true)
    try{
      const createPost = await axiosClient.post('/posts', {
        ...newPost
      } )
      console.log(createPost)
      toast('😎 post created!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }catch(err){
      console.log(err)
      setError(err.response.data.messages)
    } finally{
      setLoading(false)

    }
  }
  const uwConfig = {
    cloudName: "dgfoioz0l",
    uploadPreset: "simo_real_estate_app",
    folder: "avatars",
    multiple: true, //restrict upload to a single file
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
  };
 
 
  return (
    <div className="AddPostPage">
      <div className="left">
        <div className="wrapper">
          <h1>Add New Post </h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="" className="item">
              <span>Title</span>
              <input name="title" required type="text" />
            </label>
            <label htmlFor="" className="item">
              <span>Price</span>
              <input name="price" required type="number" />
            </label>
            <label htmlFor="" className="item">
              <span>Address</span>
              <input name="address" required type="text" />
            </label>
            <div className="desc">
              <span>Desc</span>
              <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>
            <label htmlFor="" className="item">
              <span>city</span>
              <input name="city" required type="text" />
            </label>
            <label htmlFor="" className="item">
              <span>bedroom</span>
              <input name="bedroom" required type="number" min={1} />
            </label>
            <label htmlFor="" className="item">
              <span>bathroom</span>
              <input name="bathroom" required type="number" min={1} />
            </label>
            <label htmlFor="" className="item">
              <span>latitude</span>
              <input name="latitude" required type="text" />
            </label>
            <label htmlFor="" className="item">
              <span>longitude</span>
              <input name="longitude" required type="text" />
            </label>
            <label htmlFor="" className="item" required>
              <span>type</span>
              <select name="type">
                <option value="">any</option>
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
              </select>
            </label>
            <label htmlFor="" className="item">
              <span>Property</span>
              <select name="property" required>
                <option value="">any</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </label>
            <label htmlFor="" className="item">
              <span>Utilities policy</span>
              <select name="utilities_policy" required>
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </label>
            <label htmlFor="" className="item">
              <span>Pet policy</span>
              <select name="pet" required>
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </label>
            <label htmlFor="" className="item">
              <span>Income Policy</span>
              <input name="income_policy" required type="text" />
            </label>
            <label htmlFor="" className="item">
              <span>Total size (sqft)</span>
              <input name="size" required type="number" min={0} />
            </label>
            <label htmlFor="" className="item">
              <span>School</span>
              <input name="school" required type="number" min={0} />
            </label>
            <label htmlFor="" className="item">
              <span>bus</span>
              <input name="bus" required type="number" min={0} />
            </label>
            <label htmlFor="" className="item">
              <span>restaurant</span>
              <input name="restaurant" required type="number" min={0} />
            </label>
            <button disabled={loading} type="submit" className="btn">
              {loading ? 'creating...' : 'create'}
            </button>
            {error && <span>{error}</span>}
          </form>
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          {images.map((img, i) => (
            <img key={i} src={img} alt="" />
          ))}

          <NewUploadWidget setAssets={setImages} uwConfig={uwConfig} />
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
