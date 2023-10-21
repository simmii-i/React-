import { useParams } from "react-router-dom";
import RestrauntMenuCard from "./RestrauntMenuCard";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestrauntMenu = () => {
  const { id } = useParams();
  const {restaurant, menu} = useRestaurantMenu(id);

  return (Object.values(menu).length === 0)  ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div className="menu-page p-2 m-2">
        <h1>Restraunt id: {id}</h1>
        <h2>{restaurant.name}</h2>
        
        <img
          className="object-cover h-80 w-140"
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
        ></img>
        
        <h2>cuisines :{restaurant?.cuisines?.join(", ")}</h2>
        <h2>⭐{restaurant.avgRating}</h2>
        <h2>{restaurant.city}</h2>
        <h2>cost: {restaurant.costForTwoMessage}</h2>
        <h2>locality: {restaurant.locality}</h2>
      </div>
      {/* <div><button className="p-2 m-5 bg-blue-500 rounded-sm font-bold " onClick={()=>handleAddItem() }>+</button> </div> */}
      {/* <div >
        <h1>Menu</h1>
        <ul>
          {Object.values(menu).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}{" "}
        </ul>
      </div> */}
      <div className="border-t border-blue-300 mt-7 flex flex-col items-center">
      {Object.values(menu).map((item) => (
            <RestrauntMenuCard key={item?.card?.info?.id} {...item?.card?.info}/>
        ))}
      </div>
    </div>
  );
};

export default RestrauntMenu;
