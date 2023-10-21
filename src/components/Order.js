import { Link } from "react-router-dom"

const Order = () =>{
    return ( 
        <>
        <div className="mt-40 flex justify-center items-center">
            <h1 className=" text-xl   font-bold">Your order has been placed 🍔</h1>
        </div>
        <div className="mt-10 flex items-center justify-center">
        <Link  to={"/"}>
            <button className=" text-xl p-1   ">
                Let's Order Some More Food 😋🥪
            </button>
          </Link>
        </div>
        </>
    )
}
export default Order