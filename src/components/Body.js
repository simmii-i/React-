import RestrauntCard from "./RestrauntCard";
import { restrauntList } from "../config";
import { useState } from "react";



function filterData(searchInput, restraunts){
    return restraunts.filter((restraunt)=> restraunt.info.name.includes(searchInput));
}

const Body = () => {
  let searchTxt = "kfc";
  const [searchInput, setSearchInput] = useState("KFC"); 
  const [restraunts , setRestraunts] = useState(restrauntList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchInput}
          //e.target.value -- input value in search bar
          onChange={(e) =>{
            setSearchInput(e.target.value);
          }
          }
        ></input>
        
        <button className="search-btn" onClick={()=>{
           const data = filterData(searchInput, restraunts);
           setRestraunts(data);

           
        }}> Search</button>
      </div>

      <div className="restraunt-list">
        {restraunts.map((Restraunt) => {
          return <RestrauntCard {...Restraunt.info} />;
        })}
      </div>
    </>
  );
};

export default Body;
