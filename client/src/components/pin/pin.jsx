import { Icon } from 'leaflet';
import "leaflet/dist/leaflet.css";
import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import marker from '../../../public/marker.png';
import './pin.scss';
import icon from "leaflet/dist/images/marker-icon.png";

function Pin({ item }) {
  const myIcon = new Icon({
    iconUrl: icon,
    iconSize: [32,32]

   })
  return (
    <Marker position={[item.latitude, item.longitude]} icon={myIcon}>
      <Popup>
       <div className="popupContainer">
       <img src={item.img} alt="" />
        <div className="popupContent">
          <Link to={`/` + item.id}>
          {item.title}
          </Link>
          <div className="bedroom">{item.bedroom} bedroom</div>
          <div className="price">${item.price}</div>
        </div>
       </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
