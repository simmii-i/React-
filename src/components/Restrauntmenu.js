import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestrauntMenu = () => {
  const { id } = useParams();
  //   413821
  const restaurant = useRestaurant(id);

  return !restaurant ? (
    <Shimmer />
  ) : (
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
