import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./shimmer";


const RestrauntMenu = () => {


  const { id } = useParams();
//   console.log(id)
console.log(useState())
//   413821
  const [menu, setMenu] = useState({});
  const [restaurant, setRestraunt] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.29844139999999&lng=77.99313599999999&restaurantId="+id
    );
    const json = await data.json();
     console.log(json);
         //  console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCard)

    //  console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel[0]?.dish?.info?.variantsV2?.variantGroups[0]?.variations)
     //  console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel[0]?.dish?.info?.variantsV2?.variantGroups[0]?.variations)

    setRestraunt(json?.data?.cards[0]?.card?.card?.info);
//    { setMenu(
//       json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel[0]?.dish?.info?.variantsV2?.variantGroups[0]?.variations);
//  } 
}

  return (!restaurant) ? (<Shimmer/>) : (
    <div className="menu">
      <div className="menu-page">
        <h1>Restraunt id: {id}</h1>
        <h2>{restaurant.name}</h2>
        <img
          className=""
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
        ></img>
        <h2>cuisines :{restaurant?.cuisines?.join(", ")}</h2>
        <h2>⭐{restaurant.avgRating}</h2>
        <h2>{restaurant.city}</h2>
        <h2>cost: {restaurant.costForTwoMessage}</h2>
        <h2>locality: {restaurant.locality}</h2>
      </div>
      {/* <div >
        <h1>Menu</h1>
        <ul>
          {Object.values(menu).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}{" "}
        </ul>
      </div> */}
    </div>
  );
};

export default RestrauntMenu;
