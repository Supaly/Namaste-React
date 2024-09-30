import ResContainer from "./ResContainer";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import {CDN_RESTAURENT} from "../utils/constants"
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setListOfRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  return listOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-block">
        <div className="search">
          <input
            type="text"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurent = listOfRestaurent.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurent(filteredRestaurent);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            onClick={() => {
              const filtered_data = listOfRestaurent.filter(
                (res) => res.info.avgRating > 4.2
              );
              setListOfRestaurent(filtered_data);
            }}
          >
            {" "}
            filter Top Restaurents{" "}
          </button>
        </div>
      </div>
      <div className="Res-container">
        {/* <ResContainer name='KFC'/> */}
        {filteredRestaurent.map((restaurent) => (
          
          <Link key={restaurent.info.id}
          to={"/restaurents/" + restaurent.info.id}>
            <ResContainer resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
