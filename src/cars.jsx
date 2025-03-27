import React, { useState } from 'react';
function Cars(){
    const [car, setCar] = useState({year:2025,make:"BMW",model:"X5"});
    function handleYearChange(e){
        setCar(c => ({...c, year: e.target.value}));
        
    }
    function handleMakeChange(e){
        setCar(c=> ({...c, make: e.target.value}));

    }
    function handleModelChange(e){
        setCar(c=>({...c, model: e.target.value}));

    }
    return(
        <div className='cars-container'>
            <h1>Cars</h1>
            <p className='car-display'>Selected Car : {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={(handleYearChange)}/><br/>
            <input type="text" value={car.make} onChange={(handleMakeChange)}/><br/>
            <input type="text" value={car.model} onChange={(handleModelChange)}/><br/>
        </div>
    )
}
export default Cars;