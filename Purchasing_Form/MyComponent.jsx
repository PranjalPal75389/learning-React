import React, { useState } from 'react';

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("Enter your text here");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [isIndia, setIsIndia] = useState(true); // Start with true to match initial "Yes" option
    
    const updateName = (event) => {
        setName(event.target.value); 
    };
    
    const updateQuantity = (event) => {
        setQuantity(event.target.value); 
    };
    
    const updateComment = (event) => {
        setComment(event.target.value); 
    };
    
    const updatePaymentMethod = (event) => {
        setPaymentMethod(event.target.value);
    };
    
    const updateIsIndia = (event) => {
        setIsIndia(event.target.value === "yes");
    };
    
    return (
        <div>
            <label>Name:</label>
            <input value={name} onChange={updateName} />
            <p>{name}</p>

            <label>Quantity:</label>
            <input value={quantity} onChange={updateQuantity} type="number" />
            <p>{quantity}</p>

            <label>Comment:</label>
            <input value={comment} onChange={updateComment} />
            <p>{comment}</p>

            <div>
                <label>
                    <input type="radio" value="COD" checked={paymentMethod === "COD"} onChange={updatePaymentMethod} />
                    Cash on Delivery
                </label>
                <label>
                    <input type="radio" value="UPI" checked={paymentMethod === "UPI"} onChange={updatePaymentMethod} />
                    UPI
                </label>
                <label>
                    <input type="radio" value="card" checked={paymentMethod === "card"} onChange={updatePaymentMethod} />
                    Card
                </label>
            </div>
            <p>Payment Method: {paymentMethod}</p>
           Is India: 
            <select value={isIndia ? "yes" : "no"} onChange={updateIsIndia}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <p>India: {isIndia ? "Yes" : "No"}</p>
        </div>
    );
}

export default MyComponent;
