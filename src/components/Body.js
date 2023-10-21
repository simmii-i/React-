import RestrauntCard from "./RestrauntCard";
import { restrauntList } from "../config";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurant from "../utils/useRestaurant";

import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
const Body = () => {
  // const [AllRestraunts, setAllRestraunts] = useState([]);
  // const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [searchInput, setSearchInput] = useState("KFC");
  const { allRestaurant,setFilteredRestaurant, filteredRestaurant } = useRestaurant();

  const {user, setUser} = useContext(UserContext) 

  // useEffect(() => {
  //   //api call
  //   getRestraunts();
  // }, []);

  // async function getRestraunts() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   setAllRestraunts(
  //     json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   setFilteredRestraunts(
  //     json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Ohoooo... You went Offline 😪</h1>;
  }

  // to avoid rendering--> ? or return null
  if (!allRestaurant) return null;

  // if(AllRestraunts !==0 && filteredRestraunts?.length === 0) return <h1>sorry ....😓 <br></br> No Restraunt math your filter ! Try something else 😻</h1>

  console.log("render");

  return allRestaurant?.length === 0 ? (
    <div className="flex flex-wrap mt-36">
      {Array.from({ length: 10 }).map((el, i) => {
        return <Shimmer key={i}></Shimmer>;
      })}
    </div>
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
            const data = filterData(searchInput, allRestaurant);
            setFilteredRestaurant(data);
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

      {/* <div className="flex flex-wrap bg-blue-50 ">
        {filteredRestaurant.map((Restraunt) => {
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
      </div> */}
      <div className="flex flex-wrap">
        {filteredRestaurant.length === 0 ? (
          <h1>No Restaurant Found</h1>
        ) : (
          filteredRestaurant.map((restaurant) => {
            return (
              <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {" "}
              {/* <RestrauntCard {...Restraunt.info} /> */}
              <RestrauntCard {...restaurant.info} key={restaurant.info.id} />

            </Link>
              
              
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
