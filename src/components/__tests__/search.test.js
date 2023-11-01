import "@testing-library/jest-dom";
import Body from "../Body";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RES_DATA } from "../../mocks/Restraunt_data";

global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json : ()=>{
          return Promise.resolve(RES_DATA)
        },
    });
});


test("Search result on Homepage",async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  
await waitFor(()=>expect(body.getByTestId("search-btn")))

  const res_list = body.getByTestId("res_list");
  
  expect(res_list.children.length).toBe(20);
  
    // console.log(res_list);
});


test("Search for string (food) on Homepage",async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  
await waitFor(()=>expect(body.getByTestId("search-btn")))

  const input = body.getByTestId("search-input");

  fireEvent.change(input, {
    target : {
      value : "food"
    } })
  

    const searchBtn = body.getByTestId("search-btn")
    
    fireEvent.click(searchBtn)
 
  const res_list = body.getByTestId("res_list");
  
  expect(res_list.children.length).toBe(1);
  
  //  console.log(res_list);
});


// test("Shimmer should show on Homepage",() => {
//   const body = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <Body />
//       </Provider>
//     </StaticRouter>
//   );


//   const shimmer = body.getByTestId("shimmer");
  
//   expect(shimmer.children.length).toBe(10);
  
  
//   console.log(shimmer);
// });


