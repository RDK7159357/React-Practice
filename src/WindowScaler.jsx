import React, { useState, useEffect, use } from 'react';

function WindowScaler(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        console.log("Event listener added");
        return () =>{
            window.removeEventListener("resize", handleResize);
            console.log("Cleanup");
        }
    },[])

    useEffect(()=>{
        document.title = `Window Size: ${width} x ${height}`;
    }, [width, height]);


    return(<div>
        <p>Window Height: {height}</p>
        <p>Window Width: {width}</p>

    </div>);
}
export default WindowScaler;