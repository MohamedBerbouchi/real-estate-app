import React from "react";
import Map from "../../components/map/map";
import Slider from "../../components/slider/slider";
import { singlePostData, userData } from "../../lib/dummydata";
import "./singlePage.scss";
import { useLoaderData, useSearchParams } from "react-router-dom";
function SinglePage() {
  const result = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams()
console.log('result', result)
 
function hCLick(){
  setSearchParams({
    type:'simo'
  })
}
return (
    <div className="singlepage">
      <div className="left">
        <div className="wrapper">
        <Slider images={singlePostData.images} />
        <div className="post_content">
          <div className="info">
          <h1>{singlePostData.title}</h1>
            <div className="address">
              <img src="/pin.png" alt="" />
              {singlePostData.address}
            </div>
            <div className="price">
              $ {singlePostData.price}
            </div>
          </div>
          <div className="user">
            <img src={userData.img} alt="" />
            <div className="name">{userData.name}</div>
          </div>
        </div>
        <div className="desc">
        Future alike hill pull picture swim magic chain seed engineer nest outer raise bound easy poetry gain loud weigh me recognize farmer bare danger. actually put square leg vessels earth engine matter key cup indeed body film century shut place environment were stage vertical roof bottom lady function breeze darkness beside tin view local breathe carbon swam declared magnet escape has from pile apart route coffee storm someone hold space use ahead sheep jungle closely natural attached part top grain your grade trade corn salmon trouble new bend most teacher range anybody every seat fifteen eventually

<button onClick={hCLick}>click</button>
        </div>
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
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="box">
              <img src="/pet.png" alt="" />
              <div className="box_content">
                <h3>Pet Policy</h3>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="box">
              <img src="/fee.png" alt="" />
              <div className="box_content">
                <h3>Property Fees</h3>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <h2 className="title">Sizes</h2>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </div>
          <h2 className="title">Nearby Places</h2>
          <div className="horizental_boxes">
            <div className="box">
              <img src="/school.png" alt="" />
              <div className="box_content">
                <h3>School</h3>
                <p>250m away</p>
              </div>
            </div>
            <div className="box">
              <img src="/pet.png" alt="" />
              <div className="box_content">
                <h3>Bus Stop</h3>
                <p>100m away</p>
              </div>
            </div>
            <div className="box">
              <img src="/fee.png" alt="" />
              <div className="box_content">
                <h3>Restaurant</h3>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <h2 className="title">Location</h2>
          <div className="map_container">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              <span>Send a Message</span>
            </button>
            <button>
              <img src="/save.png" alt="" />
              <span>save the place</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
