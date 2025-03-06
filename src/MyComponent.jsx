import React, {useState} from 'react';

function MyComponent() {
    const [name,setName] = useState("Guest")
    const [quantity, setQuantity] = useState(1);
    const [comment,setComment] = useState("")

    const [payment,setPayment] = useState("")

    const [shipping,setShipping] = useState("")

    function handleShippingChange(event){
        setShipping(event.target.value)
    }

    function handlePaymentChange(event){
        setPayment(event.target.value)
    }

    function handleCommentChange(event){
        setComment(event.target.value)
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }



    function handleNameChange(event){
        setName(event.target.value)
    }
// const [name, setName]=useState("Guest");
// const [age, setAge]=useState(0);
// const [isEmployed,setIsEmployed]=useState(false);


// const updateName=()=>{
//     setName("RDK7")
// }

// const incrementAge=()=>{
//     setAge(age+1);
// }

// const toggleEmployedStatus=()=>{
//     setIsEmployed(!isEmployed);
// }

// return (
//     <div>
//         <p>Name: {name}</p>
//         <button onClick={updateName}>Set Name</button>
//         <p>Age: {age}</p>
//         <button onClick={incrementAge}>Increment Age</button>
//         <p>Is employed: {isEmployed?"Yes":"No"}</p>
//         <button onClick={toggleEmployedStatus}>Toggle Status</button>
//     </div>
// );

return(
    <div>
        <input value={name} onChange={handleNameChange}>
        </input>
        <p>
            Name: {name}
        </p>

        <input value={quantity} onChange={handleQuantityChange} type="number"></input>
        <p>
            Quantity: {quantity}
        </p>

        <textarea value={comment} onChange={handleCommentChange} placeholder='Enter instructions'></textarea>
        <p> Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an Option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Giftcard">Giftcard</option>

        </select>
        <p>
            Payment: {payment}
        </p>
        <div>
                 <input type="radio" value="Pickup" name="ship" checked={shipping==="Pickup"} onChange={handleShippingChange}></input>
                 <label>Pickup</label>
        </div>
        <div>
                 <input type="radio" value="Delivery" name="ship" checked={shipping==="Delivery"} onChange={handleShippingChange}></input>
                 <label>Delivery</label>
        </div>
        <p>
            Shipping : {shipping}
        </p>
   
    </div>
);
}
export default MyComponent;