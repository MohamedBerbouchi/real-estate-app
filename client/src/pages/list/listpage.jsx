import React, { Suspense, useState } from "react";
import List from "../../components/list/list";
import Map from "../../components/map/map";
import { listData } from "../../lib/dummydata";
import "./listpage.scss";
import { Await, useLoaderData, useSearchParams } from "react-router-dom";

function ListPage() {
  const data = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    location: searchParams.get("location") || "",
    minPrice: searchParams.get("minPrice") || "",
    MaxPrice: searchParams.get("MaxPrice") || "",
    property: searchParams.get("property") || "",
    bedroom: searchParams.get("bedroom") || "",
  });

  if (!data.ok) {
    toast.error("Failed to fetch posts");
    return <Navigate to={"/"} />;
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  };
  const handleSearchClick = () => {
    setSearchParams(query);
  };
 async function t(){
  console.log(await data)
 }
 t()
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
              <input
                type="text"
                placeholder="City Location"
                name="location"
                onChange={handleChange}
                value={query.location}
              />
            </div>
            <div className="bottom">
              <div className="item">
                <label htmlFor="type">Type</label>
                <select name="type" id="type" onChange={handleChange} defaultValue={query.type}>
                  <option value="">any</option>
                  <option value="buy">Buy</option>
                  <option value="rent">Rent</option>
                </select>
              </div>
              <div className="item">
                <label htmlFor="Property">Property</label>
                <select name="property" id="Property" onChange={handleChange} defaultValue={query.property}>
                  <option value="">any</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="land">Land</option>
                </select>
              </div>

              <div className="item">
                <label htmlFor="min">Min Price</label>
                <input
                  id="min"
                  type="number"
                  placeholder="any"
                  onChange={handleChange}
                  value={query.minPrice}
                />
              </div>
              <div className="item">
                <label htmlFor="max">Max Price</label>
                <input
                  id="max"
                  type="number"
                  placeholder="any"
                  onChange={handleChange}
                  value={query.MaxPrice}
                />
              </div>
              <div className="item">
                <label htmlFor="Bedroom">Bedroom</label>
                <input
                  id="Bedroom"
                  type="text"
                  placeholder="any"
                  onChange={handleChange}
                  value={query.bedroom}
                />
              </div>
              <button onClick={handleSearchClick} style={{ cursor: "pointer" }}>
                <img src="/search.png" alt="" />
              </button>
            </div>
          </div>
          <Suspense fallback={<h1>Loading posts ...</h1>}>
            <Await
              resolve={data.postResolve}
              errorElement={<div>Could not load Posts 😬</div>}
              children={(postResolve) => (
                // <Reviews items={resolvedReviews} />
                  <List items={postResolve.data} />

              )}
            />
          </Suspense>
        </div>
      </div>

      <div className="map_container">
        {/* <Map items={data.data} /> */}
        <Suspense fallback={<h1>Loading map ...</h1>}>
            <Await
              resolve={data.postResolve}
              errorElement={<div>Could not load Posts 😬</div>}
              children={(postResolve) => ( <Map items={postResolve.data} />)}
            />
          </Suspense>
      
      </div>
    </div>
  );
}

export default ListPage;
