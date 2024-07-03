import { useState, useEffect } from "react";
import { restaurantMenuCDN } from "../config";

const useRestaurantMenu = (resid) => {
  console.log(resid)
    const [restaurant, setRestaurant] = useState({});
    const [menu, setMenu] = useState({});
    useEffect(() => {
      getRestrauntInfo();
    }, []);
  
    const getRestrauntInfo = async () => {
      const data = await fetch(restaurantMenuCDN+resid);
      const json = await data.json();
      console.log(json)
      console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards)
      {
      }
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards === undefined
        ? setMenu(
            json.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
              .itemCards
          )
        : setMenu(
            json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
              ?.card?.card?.itemCards
          );
  
      setRestaurant( json.data.cards[2].card.card
        ?.info);
    };
    return { restaurant, menu };
  };
  
  export default useRestaurantMenu;