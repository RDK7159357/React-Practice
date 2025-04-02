import React,{useState,useEffect} from 'react';

function Clock(){
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date());

        },1000);

        return () => {
            clearInterval(interval);
        }

    },[]);

    function padZero(num){
        return num < 10 ? `0${num}` : num;
    }


    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${ampm}`;
    }

    return(<div>

        <h1>Clock</h1>
        <p>
            <span>{formatTime()}</span>
        </p>
    </div>);

}
export default Clock;