import RestrauntCard from "./RestrauntCard";
import { restrauntList } from "../config";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

function filterData(searchInput, restraunts) {
  return restraunts.filter((restraunt) =>
    restraunt?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
}

const Body = () => {
  const [AllRestraunts, setAllRestraunts] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [searchInput, setSearchInput] = useState("KFC");

  useEffect(() => {
    //api call
    getRestraunts();
  }, []);

  async function getRestraunts() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestraunts(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunts(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }


  // to avoid rendering--> ? or return null
  if (!AllRestraunts) return <h1>not there</h1>;

  // if(AllRestraunts !==0 && filteredRestraunts?.length === 0) return <h1>sorry ....😓 <br></br> No Restraunt math your filter ! Try something else 😻</h1>

  console.log("render");
  //conditonal renderring
  // if restraunt is emty => shimmer UI
  // has data =>
  return (AllRestraunts.length === 0) ? (
    <Shimmer/>
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchInput}
          //e.target.value -- input value in search bar
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        ></input>

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, AllRestraunts);
            setFilteredRestraunts(data);
          }}
        >
          {" "}
          Search
        </button>
      </div>

      <div className="restraunt-list">
      {/* (filteredRestraunts?.length === 0) ? return (<h1>sorry ....😓 <br></br> No Restraunt math your filter ! Try something else 😻</h1>) */}
        {filteredRestraunts.map((Restraunt) => {

          return <RestrauntCard {...Restraunt.info} />;
        })} 
      </div>
    </>
  );
};

export default Body;
