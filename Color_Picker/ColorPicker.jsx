import React, {useState} from 'react';
function ColorPicker(){
    const [colorValue,setColorValue]=useState("#ffffff");
    function updateColorValue (e) {
        setColorValue(e.target.value)
    }
    return(
        <div>
               <div  className="display-color" style={{backgroundColor:colorValue}}>
                     <span>Picked Color : {colorValue}</span>
               </div>
                       <div className="color-picker-container">choose color 
                             <input value={colorValue} type="color"  onChange={updateColorValue} />
                       </div>
        </div>
    )
}
export default ColorPicker