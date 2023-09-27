import { useEffect, useState } from "react";

 
 const Profile = (props)=>{
    const [count, setCount] = useState(0);

    useEffect(()=>{
        const timer = setInterval (()=>{
            console.log("namaste react")
        },1000);
       

        return()=>{
            clearInterval(timer);
            console.log("useEffect return ")
            //for unmounting
        }
    } )
    return (
        <div>
            <h2>Profile React Component</h2>
            <h3>name : {props.name}</h3>
            <h3>count : {count}</h3>
            <button onClick={()=>setCount(1) }>click</button>
        </div>
    )
 }

 export default Profile;