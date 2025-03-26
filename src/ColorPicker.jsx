import React, {useState} from 'react';

function ColorPicker(){
    const [color,setColor]=useState("#000000");

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return(
        <div className='color-picker'>
            <h2>Color Picker</h2>
            <div className='color-box' style={{backgroundColor:color}}>
                <p align="center">Selected color : {color}</p>
            </div>
            <input type="color" value={color} onChange={handleColorChange}/>
            <p>You picked: {color}</p>
        </div>
    );
}

export default ColorPicker;