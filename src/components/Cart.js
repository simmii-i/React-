import { useSelector, useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart, removeItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const cartValue = useSelector((store) => store.cart.cartValue)
  const totalCartItem = useSelector(store => store.cart.totalQuantity)
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  return (
    <>
      <div className=" flex flex-wrap mt-40" data-testid = "cartItem">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>

      
       { cartValue === 0 ? <EmptyCart/> : 
        <div className=" px-[35%] flex gap-16 ">
          <div className="flex gap-16">
            <Link to={"/order"}>
              <button
                className="border border-blue-200 bg-blue-400 p-1 h-[100%] w-40 shadow-lg hover:shadow hover:italic"
                onClick={() => handleClearCart()}
              >
                Place Order
              </button>
            </Link>
            <p className="font-bold">Total Amount :- {cartValue}</p>
            <button
                className="border border-violet-50 bg-violet-400 p-1 h-[100%] w-40 hover:font-bold shadow-lg hover:shadow"
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </button>
          </div>
        </div>
       }
       
       
    </>
  );
};
export default Cart;