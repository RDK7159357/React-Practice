import React, { useState } from 'react';
function Cars(){
    const [cars, setCars] = useState([{year:2025,make:"BMW",model:"X5"}]);
    const [newCar, setNewCar] = useState({year:2025,make:"BMW",model:"X5"});
    
    function handleYearChange(e){
        setNewCar(c => ({...c, year: e.target.value}));
    }
    
    function handleMakeChange(e){
        setNewCar(c=> ({...c, make: e.target.value}));
    }
    
    function handleModelChange(e){
        setNewCar(c=>({...c, model: e.target.value}));
    }
    
    function handleRemoveCar(index){
        setCars(c => c.filter((_, i) => i !== index));
    }
    
    function handleAddCar(){
        if(newCar.year && newCar.make && newCar.model){
            setCars(c=>[...c, {...newCar}]);
        }
    }

    return(
        <div className='cars-container'>
            <h1>Cars</h1>
            <p className='car-display'>New Car : {newCar.year} {newCar.make} {newCar.model}</p>
            <ul>
                {cars.map((car,index)=>
                    <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>
                )}
            </ul>
            <input type="number" id="year" value={newCar.year} onChange={handleYearChange}/><br/>
            <input type="text" id="make" value={newCar.make} onChange={handleMakeChange}/><br/>
            <input type="text" id="model" value={newCar.model} onChange={handleModelChange}/><br/>
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )
}
export default Cars;