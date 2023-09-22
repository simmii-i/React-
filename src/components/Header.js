import { useState } from "react";

const loggedIn = () => {
  return true;
};

const title = (
  <img
    alt="logo"
    className="logo"
    src="https://obs.line-scdn.net/0m0339dd5b72513e8a8d6127b836e5ecf1e128f1da5cb7"
  ></img>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="Header">
      {title}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={()=> setIsLoggedIn(false)}>LogOut</button>
      ) : (
        <button onClick={()=> setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
export default Header;
