import './App.css'
import Header from './components/Header.jsx'
import Timer from './components/Timer.jsx'
import SessionLog from './components/SessionLog.jsx'
import { useEffect, useState } from 'react'


function App() {

  const [sessions, setSessions]  = useState(()  => { //array that saves Sessions data 
    const saved = localStorage.getItem("sessions");  //checks if there are sessions saved
    return  saved ? JSON.parse(saved) : [];          //if there are it stores them in session if there aren't sessions is set to empty
  }); //sessions saved locally are stored inside the saved variable as JSON and than parsed to be saved in the sessions array

  const addSession = (session) =>  {               //function that updates the sessions array; this is just a tool to update sessions safely
    setSessions (prev => [...prev, session]);      //this function will be passed to timer that will use it to update the sessions array
  };

  const clearSessions = () => {
    setSessions([]);
    localStorage.setItem("sessions", JSON.stringify([]));
  }

  useEffect(()=> {
    localStorage.setItem("sessions", JSON.stringify(sessions));
  }, [sessions]) //everytime sessions changes updates the localStorage


  return (
    <>
      <div className="app-container">
        <Header />
        <Timer addSession={addSession}/> {/*App lends addSessions to Timer so that it can add sessions to the array*/}
        <SessionLog sessions={sessions} clearSessions={clearSessions}/>
      </div>
    </>
  )
}

export default App