import React,{useState,useEffect,useRef} from 'react';

function StopWatch(){

    const [isRunning,setIsRunning] = useState(false);
    const [Elapsedtime,setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);

    const startTimerRef = useRef(0)

    useEffect(() => {
        if(isRunning){
            intervalIdRef.current = setInterval(()=>{
                setElapsedTime(Date.now() - startTimerRef.current);

            },10)
        }

        return()=>{
            clearInterval(intervalIdRef.current);

        }
    },[isRunning])

    function startTimer(){
        setIsRunning(true);
        startTimerRef.current = Date.now() - Elapsedtime; 
    }

    function stopTimer(){
        setIsRunning(false);
    }
    function reset(){
        setElapsedTime(0);
        setIsRunning(false);

    }

    function formatTime(){
        const totalSeconds = Math.floor(Elapsedtime / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const milliseconds = Math.floor((Elapsedtime % 1000) / 10);
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
        const formattedMilliseconds = String(milliseconds).padStart(2, '0');
        return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;

        
    }
    return (
    <div className='stopwatch-container'>
        <h1 className='stopwatch-title'>StopWatch</h1>
        <p className='stopwatch-display'>{formatTime()}</p>
        <div className='stopwatch-buttons'>
            <button className='control-button' onClick={startTimer}>Start</button>
            <button className='control-button' onClick={stopTimer}>Stop</button>
            <button className='control-button' onClick={reset}>Reset</button>
        </div>
        <style>
            {`
                .stopwatch-container {
                    text-align: center;
                    padding: 20px;
                    background-color: #f0f0f0;
                    border-radius: 10px;
                    max-width: 400px;
                    margin: 0 auto;
                }
                .stopwatch-title {
                    color: #333;
                    margin-bottom: 20px;
                }
                .stopwatch-display {
                    font-size: 2.5em;
                    font-family: monospace;
                    color: #444;
                }
                .stopwatch-buttons {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                }
                .control-button {
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    background-color: #4CAF50;
                    color: white;
                    cursor: pointer;
                }
                .control-button:hover {
                    background-color: #45a049;
                }
            `}
        </style>
    </div>);
}
export default StopWatch;