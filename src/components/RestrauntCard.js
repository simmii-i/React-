// import { restrauntList } from "../config";
import { IMG_CDN_URL } from "../config";


const RestrauntCard = (  {name,cuisines,avgRatingString,cloudinaryImageId} ) => {
  // const {name,cuisines,avgRatingString,cloudinaryImageId} = restaurant.info;   //destructuring object seprately
 
 return (
  <div className="card w-56 p-2 m-2 shadow-lg bg-blue-200">
   
    <img src={IMG_CDN_URL + cloudinaryImageId }></img>
    <h2 className="font-bold text-xl">{name}</h2>
    <h3>{cuisines.join(", ")} </h3>
    <h4>{avgRatingString} </h4>
  </div>
);
}

 export default RestrauntCard;