import React from "react";
import Map from "../../components/map/map";
import Slider from "../../components/slider/slider";
import { singlePostData } from "../../lib/dummydata";
import "./singlePage.scss";
function SinglePage() {
  return (
    <div className="singlepage">
      <div className="left">
        <div className="wrapper">
        <Slider images={singlePostData.images} />
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
