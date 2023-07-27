import React,{useState,useRef} from "react";
import Child from "./Child"

const Parent =()=>{

    let [items,setItems] = useState([]);

    const [newItemName, setNewItemName] = useState('');
    const [newItemPrice, setNewItemPrice] = useState('');
    
    let form = useRef(null);
    console.log(items.length);

    function itemObjects(event){
        event.preventDefault();
        if(newItemName && newItemPrice){
            console.log(items); 
            let newId = items.length > 0 ? items[items.length-1].id+1 : 1; 
            let newItem = {id:newId,itemName:newItemName,itemPrice:newItemPrice};
            setItems((prevItems)=>[...prevItems,newItem])
            setNewItemName('');
            setNewItemPrice('');
            console.log(items); 
        }
    };
    
    function removeItem(itemId){
        setItems((prevItem)=>prevItem.filter((item)=>{
            return item.id !== itemId
        }));
    }

    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <form ref={form}>
                <label>Item Name:
                    <input id="itemName" type="text" value={newItemName} onChange={(e) => setNewItemName(e.target.value)}></input>
                </label>
                <label>Item Price:
                    <input id="itemPrice" type="number" value={newItemPrice} onChange={(e) => setNewItemPrice(e.target.value)}></input>
                </label>
                <button onClick={itemObjects}>Add Items</button>
            </form>
            <Child items={items} removeItem={removeItem}/>
        </div>
    )
}
export default Parent