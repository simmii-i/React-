import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should on rendering header", () => {
//    load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
     </Provider>
    </StaticRouter>
  );


const logo = header.getAllByTestId("logo");
// console.log(logo[0]);
expect(logo[0].alt).toBe('logo');

   //check if logo is loader

 });

 test("cart should have 0 items on rendering header", () => {
    //    load header
      const header = render(
        <StaticRouter>
          <Provider store={store}>
            <Header />
         </Provider>
        </StaticRouter>
      );
    
    
    const cart = header.getByTestId("cart");
    // console.log(cart[0]);
    expect(cart.innerHTML).toBe('0');
    
       //check if logo is loader
    
     });
