import React,{useState,useEffect,useRef} from 'react';
function Watch(){

    const [isRunning,setIsRunning]=useState(false);
    const [initial,setInitial]=useState(0);
    const timeRef=useRef(null);
    const startref=useRef(0);
    const endref=useRef

    useEffect(()=>{
        if(isRunning){
            timeRef.current=setInterval(()=>{
                setInitial(Date.now()- startref.current);
            },10)
        }
        return()=>{
            clearInterval(timeRef.current);
        }

    },[isRunning]);

    function Start(){
        setIsRunning(true);
        startref.current=Date.now()-initial;
        


    }
    function Stop(){
        setIsRunning(false);
    }
    function Reset(){
        setInitial(0);
        setIsRunning(false);
    }
    function initialTime(){
        let hour=Math.floor(initial/(1000*60*60));
        let minute=Math.floor(initial/(1000*60)%60);
        let sec=Math.floor(initial/(1000)%60);
        let millisec=Math.floor((initial % 1000)/10);
        hour=String(hour).padStart(2,"0");
        minute=String(minute).padStart(2,"0");
        sec=String(sec).padStart(2,"0");
        millisec=String(millisec).padStart(2,"0");
        return `${hour}:${minute}:${sec}:${millisec}`;
    }
    return(
        <body>
            <h1>Stopwatch Using React</h1>
             <div className="watch">
            <div className="display">{initialTime()}</div>
            <div className="control">
                <button onClick={Start} className="start">Start</button>
                <button onClick={Stop} className="stop">Stop</button>
                <button onClick={Reset} className="reset">reset</button>
            </div>
        </div>

        </body>
       
    );

}
export default Watch