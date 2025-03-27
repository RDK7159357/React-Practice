import React from 'react';
function Counter(){
    const [count, setCount] = React.useState(0);
    return(
        <div className='counter-container'>
            <h1>Counter</h1>
            <p className='count-display'>Current Count : {count}</p>
            <button className='counter-button'  onClick={()=>setCount(c=>c+1)}>Increment</button>
            <button className='counter-button' onClick={()=>setCount(c=>c-1)}>Decrement</button>
            <button className='counter-button' onClick={()=>setCount(0)}>Reset</button>
        </div>
    )

}
export default Counter;