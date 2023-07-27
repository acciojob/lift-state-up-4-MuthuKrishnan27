import React from "react";

const Child =({items,removeItem})=>{

    return (
        <div className="child">
            <h1>Child Component</h1>
           <ul>
            {
                items.map((item)=>(
                    <li key={item.id}>
                        <span id="itemName">{item.itemName} - </span>
                        <span id="itemPrice">${item.itemPrice}</span>
                        <button onClick={()=>removeItem(item.id)}>Remove</button>
                    </li>
                ))
            }
           </ul>
        </div>
    )
}
export default Child