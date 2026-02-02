import { use, useEffect } from "react";
import { useState } from "react";

function Timer({ addSession }){
    const [running, setRunning] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [subject, setSubject] = useState("");
    const [awaitingSubject, setAwaitingSubject] = useState(false);
    const [savedDuration, setSavedDuration]  =  useState(0);



/*  
    TODO: Future feature for adding subject titles to sessions
        STATE VARIABLE = subject, awaitingSubject
        on end session add an inline form to type the subject and a save button to save the session
        sessions must contain objects like this {duration, subject}
        subject will be shown in the SessionLog before the duration (ex: Math 1: 10:00)
        LOGIC  = 
        if(running === true){show end button}
        if(running === false && awaitingSubject === true){show form}
        if(running === false && awaitingSubject === false){show start button}
    ex:
        {running ? (<button className="end-button" onClick={endSession} disabled={!running}>End Session</button>)
        : (awaitingSubject  ?  (form) :  (<button className="start-button" onClick={startSession} >Start Session</button>))
        }
            //not sure if this works
            //update IT DOES!!!!

        !!needs another state variable savedDuration to save the duration of the sassion while waiting for the subjet to be entered
            
    
    */


    const startSession = () => {
        setRunning(true);   //starts timer
    };

    const endSession = () => {
        setRunning(false); //stops timer
        setSavedDuration(seconds); //saves session duration
        setSeconds(0);  //resets seconds
        setAwaitingSubject(true);  //renders subject input form
    };

    const saveSession  = () =>{ //when session's subject gets saved 
        addSession({
            duration: savedDuration, 
            subject:  subject
        });   //adds session to sessions array (in App)
        setSubject("");         //resets subject
        setSavedDuration(0);       //resets duration
        setAwaitingSubject(false);  //brings back timer and start timer button
    }
    
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
            {/*renders conditionally either timer or input form for subject*/}
            {awaitingSubject 
            ?   <div>
                    <input
                    className="subject-input"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Enter Session Title"
                    />
                </div> 
            :   (<div className="clock" >{timeString}</div>)}
            
            {/*show button depending on the value of running and awaitingSubject*/}
            {running 
            ? (<button className="end-button" onClick={endSession} disabled={!running}>End Session</button>)
            : (awaitingSubject  
                ? (<button className="save-button"  onClick={saveSession}  disabled={subject.trim() === ""}>Save</button>) 
                :  (<button className="start-button" onClick={startSession} >Start Session</button>)) 
            }
        </section>
    );
}

export default Timer;