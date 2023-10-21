import React from "react";
import { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Footer } from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestrauntMenu from "./components/RestrauntMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import Order from "./components/Order";
//import RestrauntMenu from "./components/Restrauntmenu";
//Dynamic or LAzy import
const About = lazy(() => import("./components/About"));
const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Simmii",
    email: "simmii.lappii@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          //override the value of Usercontext
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        <Outlet />
      </UserContext.Provider>

      <Footer />
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestrauntMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            {" "}
            <Instamart />
          </Suspense>
        ),
      },
      {
        path : "/cart",
        element: <Cart/>
      },
      {
        path: "/order",
        element : <Order/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
