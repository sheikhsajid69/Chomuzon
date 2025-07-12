import React, {useState} from "react";
import Waiter from "./Waiter";
function Restaurant() {
    const [order,setOrder]=useState("Biriyani");
    return(
       <>
       <h1>Lifting State Up</h1>
       <h2>Restaurant (parent)</h2>
       <Waiter order={order}/>
       <button onClick={()=>setOrder("Pizza")}>Order Pizza</button><br></br>
       <button onClick={()=>setOrder("Burger")}>Order Burger</button>
       </> 
    )

}
export default Restaurant;