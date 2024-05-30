import "./createPost.scss";
//
import React, {
   useContext,
  useState,
 } from "react";
 
 import ReactQuill from 'react-quill';
 import 'react-quill/dist/quill.snow.css';

 import axiosClient from "../../lib/axiosClient";
import { AuthContext } from "../../context/AuthContext";
import UploadWidget from "../../components/upload-widget/upload-widget";
import NewUploadWidget from "../../components/upload-widget/new-upload-widget";

function CreatePost() {
  const [error, setError] = useState("");
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const [images, setImages] = useState([])

 
  async function handleSubmit(e) {
    e.preventDefault();
     
  }
const uwConfig= {
  cloudName: 'dgfoioz0l',
  uploadPreset: 'simo_real_estate_app',
  folder: "avatars",
  multiple: true,  //restrict upload to a single file
  // sources: [ "local", "url"], // restrict the upload sources to URL and local files
}
console.log(images)
  return (
    <div className="AddPostPage">
      <div className="left">
        <div className="wrapper">
          <h1>Add New Post  </h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor=""  className="item">
              <span>Title</span>
              <input
                name="title"
                required
                type="text"
               
              />
            </label>
            <label htmlFor=""  className="item">
              <span>Price</span>
              <input
                name="price"
                required
                type="number"
               
              />
            </label>
            <label htmlFor=""  className="item">
              <span>Address</span>
              <input
                name="address"
                required
                type="text"
               
              />
            </label>
            <div  className="desc">
              <span>Desc</span>
              <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>
            <label htmlFor=""  className="item">
              <span>city</span>
              <input
                name="city"
                required
                type="text"
               
              />
            </label>
            <label htmlFor=""  className="item">
              <span>bedroom</span>
              <input
                name="bedroom"
                required
                type="number"
               
              />
            </label>
            <label htmlFor=""  className="item">
              <span>bathroom</span>
              <input
                name="bathroom"
                required
                type="number"
               
              />
            </label>
            <label htmlFor=""  className="item">
              <span>latitude</span>
              <input
                name="latitude"
                required
                type="number"
               
              />
            </label>
            <label htmlFor=""  className="item">
              <span>longitude</span>
              <input
                name="longitude"
                required
                type="number"
               
              />
            </label>
            <label htmlFor=""  className="item">
              <span>type</span>
              <select name="type">
                  <option value="">any</option>
                  <option value="buy">Buy</option>
                  <option value="rent">Rent</option>
                </select>
            </label>
            <label htmlFor=""  className="item">
              <span>Property</span>
              <select name="property">
                  <option value="">any</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="land">Land</option>
                </select>
            </label>
            <label htmlFor=""  className="item">
              <span>Utilities policy</span>
              <select name="utilities_policy" >
                  <option value="">Owner is responsible</option>
                </select>
            </label>
            <label htmlFor=""  className="item">
              <span>Pet policy</span>
              <select name="property">
                  <option value="">Allowed</option>
                  <option value="">Not Allowed</option>
                </select>
            </label>
            <label htmlFor=""  className="item">
              <span>Income Policy</span>
              <input
                name="income_policy"
                required
                type="text"
               
              />
            </label>
            <label htmlFor=""  className="item">
              <span>Total size (sqft)</span>
              <input
                name="size"
                required
                type="number"
               
              />
            </label>
            <label htmlFor=""  className="item">
              <span>School</span>
              <input
                name="school"
                required
                type="number"
               
              />
            </label>
            <label htmlFor=""  className="item">
              <span>bus</span>
              <input
                name="bus"
                required
                type="number"
               
              />
            </label>
            <label htmlFor=""  className="item">
              <span>restaurant</span>
              <input
                name="restaurant"
                required
                type="number"
               
              />
            </label>
            <button disabled={loading} type="submit" className="btn">
              update
            </button>
            {error && <span>{error}</span>}
          </form>
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          {images.map((img, i)=> <img key={i} src={img} alt="" />)}
        
          <NewUploadWidget  setAssets={setImages} uwConfig={uwConfig} />
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
