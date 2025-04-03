import React,{useState,useEffect,useRef} from 'react';

function Ref(){

    const [count,setCount] = useState(0);
    const inputRef = useRef(0);
    const inputRef1 = useRef(0);
    const inputRef2= useRef(0);

    useEffect(()=>
    {
        console.log("Render");
    })

    function handleclick1(){
        inputRef.current.focus();
   
        inputRef.current.style.backgroundColor = "yellow";
        inputRef2.current.value = "Hello";

    }
    function handleclick2(){
        inputRef1.current.focus();
   
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.value = "Hello";

    }
    function handleclick3(){
        inputRef2.current.focus();
   
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef1.current.value = "Hello";

    }

    return (
        <div>
            <div>
                  <button onClick={handleclick1}>Click me</button>
            <input type="text" ref={inputRef} />
            </div>
            <div>
                  <button onClick={handleclick2}>Click me</button>
            <input type="text" ref={inputRef1} />
            </div>
            <div>   <button onClick={handleclick3}>Click me</button>
            <input type="text" ref={inputRef2} /></div>
         

        </div>
    );
}
export default Ref;