import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";
const loggedIn = () => {
  return true;
};

const title = (
  <div className="h-28 w-28 bg-black">
  <img 
    alt="logo"
    src="https://obs.line-scdn.net/0m0339dd5b72513e8a8d6127b836e5ecf1e128f1da5cb7"
  ></img>
  </div>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const {user} = useContext(UserContext)

  const cartItems = useSelector(store => store?.cart?.items)
  
  return (
   
    <div className="flex  justify-items-center justify-between bg-blue-100 shadow-lg text-black ">
      {title}
      <div className="nav-items">
        <ul className="flex py-10 ">
          <li className="px-2">
            <Link to="/"> Home </Link>{" "}
          </li>
          <li className="px-2">
            <Link to="/about"> About </Link>
          </li>

          <li className="px-2">
            <Link to="/instamart"> Instamart </Link>
          </li>

          <li className="px-2">
            <Link to="/contact"> Contact Us </Link>
          </li>
          <Link to={"/cart"}>
          <li className="flex pl-2">Cart <sup className=" font-bold text-lg"> <div className=" w-5 top-1 h-5 m-0.5 pl-0.5 place-items-center border-2 border-yellow-500 bg-yellow-400 rounded-full"><sup>{cartItems?.length}</sup></div></sup>  </li>
          </Link>
        </ul>
        
      </div>
      <span className="p-10 font-bold text-black-900"> {user?.name}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
   
  );
};
export default Header;
