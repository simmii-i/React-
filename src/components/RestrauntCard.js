// import { restrauntList } from "../config";
import { IMG_CDN_URL } from "../config";


const RestrauntCard = (  {name,cuisines,avgRatingString,cloudinaryImageId} ) => {
  // const {name,cuisines,avgRatingString,cloudinaryImageId} = restaurant.info;   //destructuring object seprately
 
 return (
  <div className="card">
   
    <img src={IMG_CDN_URL + cloudinaryImageId }></img>
    <h2>{name}</h2>
    <h3>{cuisines.join(", ")} </h3>
    <h4>{avgRatingString} </h4>
  </div>
);
}

 export default RestrauntCard;