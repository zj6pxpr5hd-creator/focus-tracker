

function SessionLog({ sessions, clearSessions}) {
  
  
  return (
    <div className="session-log">
      <h2>Previous Sessions</h2>
      <button className="clear-button" onClick={clearSessions}>Clear all</button>
      {/*Session List*/}
      
      <table className="sessions-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Subject</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {sessions.length!==0  ? (sessions.slice().reverse().map((session, index) =>  { //maps over the array in revers order to show latest session on top
          
          const time = session.duration;
          const subject = session.subject;
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
            <tr key={index}>
              <td>{sessionNumber}</td>
              <td>{subject}</td>
              <td>{timeString}</td>
            </tr>
          );
        }))  : (<p>No sessions</p>)}
        </tbody>
      </table>
      
      {/*}
        {sessions.length!==0  ? (sessions.slice().reverse().map((session, index) =>  { //maps over the array in revers order to show latest session on top
          
          const time = session.duration;
          const subject = session.subject;
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
           {subject} {sessionNumber} : {timeString}
          </li>
          );
        }))  : (<p>No sessions</p>)}
            */}
      
    </div>
  );
}

export default SessionLog;