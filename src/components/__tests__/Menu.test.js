import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { Menu_Data } from "../../mocks/Menu_data";
import RestrauntMenu from "../RestrauntMenu";
import Header from "../Header";
import Cart from "../Cart"

global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json : ()=>{
          return Promise.resolve(Menu_Data)
        },
    });
});



test(" add item to Cart",async () => {
    const body = render(
      <StaticRouter>
        <Provider store={store}>
        <Header/>
          <RestrauntMenu />
          <Cart/>
        </Provider>
      </StaticRouter>
    );
    
  await waitFor(()=>expect(body.getByTestId("menu")))
  
    const addBtn = body.getAllByTestId("addBtn");
      
      fireEvent.click(addBtn[0])
      fireEvent.click(addBtn[2])
      
   
    const cart = body.getByTestId("cart");

    expect(cart.innerHTML).toBe("2");

       // console.log();
  });
  
  