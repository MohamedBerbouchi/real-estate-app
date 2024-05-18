import React from "react";
import List from "../../components/list/list";
import Map from "../../components/map/map";
import { listData } from "../../lib/dummydata";
import "./listpage.scss";

function ListPage() {
  return (
    <div className="listpage">
      <div className="content">
      
        <div className="wrapper">
        <h1>
          Search results for <b>London</b>
        </h1>
          <div className="filter_container">
            <div className="item">
              <label htmlFor="Location">Location</label>
              <input type="text" placeholder="City Location" />
            </div>
            <div className="bottom">
              <div className="item">
                <label htmlFor="type">Type</label>
                <select name="type" id="type">
                  <option value="">any</option>
                  <option value="buy">Buy</option>
                  <option value="rent">Rent</option>
                </select>
              </div>
              <div className="item">
                <label htmlFor="Property">Property</label>
                <select name="property" id="Property">
                  <option value="">any</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="land">Land</option>
                </select>
              </div>

              <div className="item">
                <label htmlFor="min">Min Price</label>
                <input id="min" type="number" placeholder="any" />
              </div>
              <div className="item">
                <label htmlFor="max">Max Price</label>
                <input id="max" type="number" placeholder="any" />
              </div>
              <div className="item">
                <label htmlFor="Bedroom">Bedroom</label>
                <input id="Bedroom" type="text" placeholder="any" />
              </div>
              <button>
                <img src="/search.png" alt="" />
              </button>
            </div>
          </div>
          <List />
        </div>
      </div>

      <div className="map_container">
        <Map items={listData} />
      </div>
    </div>
  );
}

export default ListPage;
