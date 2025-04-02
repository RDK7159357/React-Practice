import React,{useState , useEffect} from "react";
function UseEffect(){
    
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    useEffect(()=>{
        console.log("Component mounted");
        document.title = `Count: ${count}`;
        return () => {
            console.log("Component unmounted");
        }
    },[count, color]);
    
    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
        document.body.style.backgroundColor = color;
        console.log("Color changed");
    }

    return(
        <div>
            <h1>
                Count:{count} {color}
            </h1>
            <button onClick={() => setCount(c=> c + 1)}>Increment</button>
            <button onClick={() => setCount(c=> c - 1)}>Decrement</button>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}
export default UseEffect;