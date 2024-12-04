import React, { useState,useEffect } from "react";

const StopWatch = () => {

    const [isRunning,setIsRunning]=useState(false);
    const [time,setTime]=useState(0);
    const [validId,setValidId] = useState(0)

    function handleStart(){
        setIsRunning((pre)=>!pre);
        
    }

    function handleReset(){
        setTime(0);
        setIsRunning(false);
    }

    useEffect(()=>{
        if(isRunning){
        const id = setInterval(()=>{
                setTime((time)=>time+1);
            },1000)
        setValidId(id);
            }
        else{
            clearInterval(validId);
        }

        return()=>clearInterval(validId)
        
    },[isRunning]
)

    function formattime(time){
        const hours = Math.floor(time/3600);
        const minutes = Math.floor(time/60)%60;
        const seconds = time%60;
        return `${hours}:${minutes}:${seconds}`;
    }

    return (
        <div>
            <h1>My Stop Watch</h1>
            <h1>{formattime(time)}</h1><br />
            <button onClick={handleStart}>{isRunning?"Stop":"Start"}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default StopWatch;