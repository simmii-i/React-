import { useState , useEffect} from "react";
import { bangloreRestaurantsCDN } from "../config";
const useRestaurant = () => {
  const [allRestaurant, SetAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([])

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(bangloreRestaurantsCDN );
    const json = await data.json();
    // console.log(json);
    SetAllRestaurant(json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants)
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants)

    // setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }

  // return restaurant;
  return {allRestaurant,filteredRestaurant,setFilteredRestaurant}

};
export default useRestaurant;








//  console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCard)
//  console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel[0]?.dish?.info?.variantsV2?.variantGroups[0]?.variations)
//    { setMenu(
//       json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel[0]?.dish?.info?.variantsV2?.variantGroups[0]?.variations);
//  }
