import { useEffect } from "react";
import { useState } from "react";

function Timer({ addSession }){
    const [running, setRunning] = useState(false);
    const [seconds, setSeconds] = useState(0);
    
    const startSession = () => {
        setRunning(true);
    };

    const endSession = () => {
        setRunning(false);
        const sessionDuration = seconds;
        setSeconds(0);
        addSession(sessionDuration); //Sends the duration to app (updates the sessions array)
    };

    
    useEffect(() => {
        let interval;  //save interval inside a variable that lives inside useEffect

        if(running){
            interval = setInterval(() => { //assign interval to variable
                setSeconds(prev => prev + 1);
            }, 1000);
        }

        return () => clearInterval(interval); //clear interval variable when running changes or component unmounts
                                              //this prevents multiple intervals from stacking
    }, [running])

    //format time for display
    const hours = Math.floor(seconds/3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const sec = seconds % 60;

    const hoursDisplay = String(hours).padStart(2, "0");
    const minutesDisplay = String(minutes).padStart(2, "0");
    const secondsDisplay = String(sec).padStart(2, "0");
    const timeString = `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`;

    return (
        <section className="timer">
            <div className="clock" >{timeString}</div>

            {/*show buttons depending on running*/}
            { !running && <button className="start-button" onClick={startSession} >Start Session</button>}
            { running && <button className="end-button" onClick={endSession} disabled={!running}>End Session</button>} 
        </section>
    );
}

export default Timer;