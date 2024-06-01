import React from "react";
import Filter from "../../components/filter/filter";
import "./homepage.scss";
import { toast } from "react-toastify";
function Homepage() {
  const notify = () => toast("Wow so easy !");


  return (
    <div className="home">
      <div className="left">
        <div className="wrapper">
          <h1>Find Real Estate & Get Your Dream Place</h1>
         

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo suscipit cum eius, iure est nulla animi consequatur
            facilis id pariatur fugit quos laudantium temporibus dolor ea
            repellat provident impedit!
          </p>

          <div className="filter">
            <Filter />
          </div>
          <div className="boxes">
            <div className="box">
              <h3>
              16+
              </h3>
              <span>
                Years of Experience
              </span>
            </div>
            <div className="box">
              <h3>
              200
              </h3>
              <span>
              Award Gained

              </span>
            </div>
            <div className="box">
              <h3>
              2000+
              </h3>
              <span>
              Property Ready

              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Homepage;
