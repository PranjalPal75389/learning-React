import React ,{useState} from 'react';
function Counter(){
    const[count,setCount]=useState(0);
    function Increment() {
        setCount(count+1);
    }
    function Decrement() {
        setCount(count-1);
    }
    function Reset() {
        setCount(0);
    }
    return(
        <div className="counter-container">
          <p className="counter-display" >{count}</p>
             <button className="counter-button" onClick={Decrement} >Decrement </button>
             <button className="counter-button" onClick={Reset}>Reset </button>
             <button className="counter-button" onClick={Increment}>Increment </button>
        </div>
    )
}
export default Counter