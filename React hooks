import React,{useState} from 'react';

export default function App() {
    
const[name,setName]=useState("Guest");
const[age,setAge]=useState(18);
const[status,setStatus]=useState("false");
    
    function updateName() {
        setName("Zoro");
    }
    function updateAge(params) {
        setAge(age+1);
    }
    function updateStatus(){
        setStatus(!status);
    }
  return <div>
   <p>Name={name}</p> 
      <button onClick={updateName}>change Name</button>
       <p>Age={age}</p> 
      <button onClick={updateAge}>Increment age</button>
       <p>Employed Status={status ?"yes":"no"}</p> 
      <button onClick={updateStatus}>Hello</button>
  </div>
}
