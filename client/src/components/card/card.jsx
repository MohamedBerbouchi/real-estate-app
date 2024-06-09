import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";
function Card({ item }) {
  console.log(item)
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="img_container">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContent">
        <Link to={`/${item.id}`} className="title">{item.title}</Link>
        <div className="address">
          <img src="/pin.png" alt="" />
          {item.address}
        </div>
        <div className="price">$ {item.price}</div>
        <div className="bottom">
        <div className="left">
          <div className="item">
            <img src="/bed.png" alt="" />
            {item.bedroom} bedroom
          </div>
          <div className="item">
            <img src="/bath.png" alt="" />
            {item.bathroom} bathroom
          </div>
        </div>
        <div className="right">
          <div className="item">
            <img src="/save.png" alt="" />
          </div>
          <div className="item">
            <img src="/chat.png" alt="" />
          </div>
        </div>
      </div>
      </div>


    </div>
  );
}

export default Card;
