
function Button(){
    const styles={
        
            backgroundColor: "hsl(200, 100%, 50%)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            display: "block",
        
    }

    // let count =0;
    // const handleClick = () => {
    //     console.log("Button clicked");
    // }
    // const handleClick2 = (name) => {
    //     if(count<3){ 
    //         count++;
    //          console.log(`Button clicked ${count} times`);
            
    //     }
    //     else{
    //         console.log(`${name} stop clicking me`)
    //     }
       

    // }

    const handleClick = (e) => e.target.textContent = "Ouch! 🤕";

return(
    // <button onClick={()=>handleClick2("rdk")} style={styles}>Click me 🤨</button>
    <>
    {/* <button onClick={(e)=>handleClick(e)} style={styles}>Click me 🤨</button> */}
    {/* <button onDoubleClick={(e)=>handleClick(e)} style={styles}>Click me 🤨</button> */}
    </>
);
}
export default Button;