import React, { useState } from 'react';
function Arrays(){
    const [food,setfood] = useState([]);

    function handleAddFood(){
        const foodInput = document.querySelector('input');
        const foodValue = foodInput.value;
        if(foodValue){
            setfood(f=>[...f, foodValue]);
            foodInput.value = '';
        }

    }
    function handleRemoveFood(){
        const foodInput = document.querySelector('input');
        const foodValue = foodInput.value;
        if(foodValue){
            setfood(f=>f.filter(item => item !== foodValue));
            foodInput.value = '';
        }else{
            setfood(f=>f.slice(0,-1));
        }


    }
    return(
        <div>
            <h2>List of Foods</h2>
            <ul>
                {food.map((food,index)=>
                <li key = {index}>{food}</li>

                )}
            </ul>
            <input className='input' type="text" placeholder="Enter food" />
            <button onClick={handleAddFood}>Add Food</button>
            <button onClick={handleRemoveFood}>Remove Food</button>
        </div>
    )

}
export default Arrays;