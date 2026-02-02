

function SessionLog({ sessions }) {
  return (
    <div className="session-log">
      <h2>Previous Sessions</h2>
      {/*Session List*/}
      <ul>

        {sessions.length!==0  ? (sessions.slice().reverse().map((time, index) =>  { //maps over the array in revers order to show latest session on top
          
          //format time for display
          const hours = Math.floor(time/3600);
          const minutes = Math.floor((time % 3600) / 60);
          const sec = time % 60;

          const hoursDisplay = String(hours).padStart(2, "0");
          const minutesDisplay = String(minutes).padStart(2, "0");
          const secondsDisplay = String(sec).padStart(2, "0");
          const timeString = `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`;
          
          //calculate latest session number based on sessions array lenght
          const sessionNumber = sessions.length - index;
          return(
         <li key={index}>
            Session {sessionNumber}: {timeString}
          </li>
          );
        }))  : (<p>No sessions</p>)}

      </ul>
    </div>
  );
}

export default SessionLog;