import React, { useState } from "react";
import "./slider.scss";
function Slider({ images }) {
  const [currentImg, setCurrentImg] = useState(null);

  function changeCurrentImg(type) {
    if (type === "right") {
      if (currentImg === images.length - 1) {
        setCurrentImg(0);
       return;
      }
      setCurrentImg(prev => prev + 1 )
    } else {
      if (currentImg === 0) {
        setCurrentImg(images.length - 1);
       return;
      }
      setCurrentImg(prev => prev  - 1 )


    }
  }
  console.log(images)
  return (
    <div className="slider">
    {currentImg !== null &&  <div className="fullScreenSlider">
        <div className="close"   onClick={ ()=> setCurrentImg(null)}>X</div>
        <div className="arrowContainer">
          <img src="/arrow.png" alt="" onClick={()=>changeCurrentImg('left')} />
        </div>
        <div className="imgContainer">
          <img src={images[currentImg]} alt=""  />
        </div>
        <div className="arrowContainer">
          <img src="/arrow.png" alt="" className="rightArrow"  onClick={()=>changeCurrentImg('right')} />
        </div>
      </div>}
      <div className="main_image">
        <img src={images[0]} alt=""   onClick={ ()=> setCurrentImg(0)} />
      </div>
      <div className="images">
        {images.slice(1).map((img, index) => (
          <img key={index} src={images[index + 1]} alt=""
            onClick={ ()=> setCurrentImg(index+1)}  />
        ))}
      </div>
    </div>
  );
}

export default Slider;
