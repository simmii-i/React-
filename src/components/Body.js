import RestrauntCard from "./RestrauntCard";
import { restrauntList } from "../config";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [AllRestraunts, setAllRestraunts] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [searchInput, setSearchInput] = useState("KFC");
  const {user, setUser} = useContext(UserContext) 
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

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Ohoooo... You went Offline 😪</h1>;
  }

  // to avoid rendering--> ? or return null
  if (!AllRestraunts) return null;

  // if(AllRestraunts !==0 && filteredRestraunts?.length === 0) return <h1>sorry ....😓 <br></br> No Restraunt math your filter ! Try something else 😻</h1>

  console.log("render");

  return AllRestraunts?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-blue-200  my-5">
        <input
          type="text"
          placeholder="Search"
          className="search-input bg-blue-100  rounded-md  focus:bg-blue-300 p-2 m-2"
          value={searchInput}
          //e.target.value -- input value in search bar
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        ></input>

        <button
          className="search-btn p-2 m-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg"
          onClick={() => {
            const data = filterData(searchInput, AllRestraunts);
            setFilteredRestraunts(data);
          }}
        >
          {" "}
          Search
        </button>
        <input value={user?.name} onChange={e => setUser({
          name : e.target.value,
          email : "new@gmail.com"
        }) }></input>
      </div>

      <div className="flex flex-wrap bg-blue-50 ">
        {filteredRestraunts.map((Restraunt) => {
          return (
            <Link
              to={"/restaurant/" + Restraunt.info.id}
              key={Restraunt.info.id}
            >
              {" "}
              <RestrauntCard {...Restraunt.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
