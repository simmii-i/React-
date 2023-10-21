import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer : {
        cart : cartSlice,
    }
})

export default store;



















/***
 * 
 * Create store
 *  -configureStore() - RTK
 * 
 * Provider my store to app
 *  -<Provider store={store>}  - import from react-redux
 * 
 * Slice
 *  - creatSlice({
 *    name : '',
 *    initialState : "",
 *    reducers : {
 *      addItem : (state, action)=>{state = action.payload}
 *     }
 *  })
 * 
 * export const {addItem, removeItem} = cartSlice.actions
 * export deafult cartSlice.reducer
 * 
 * 
 * put that into store
 *   - reducer : {
 *      cart : cartSlice,
 *      user : userslice,
 *       }
 */