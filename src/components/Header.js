import { useState } from "react";
import { Link } from "react-router-dom";

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
          <li className="px-2">Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
   
  );
};
export default Header;
