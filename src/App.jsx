import './App.css'
import Header from './components/Header.jsx'
import Timer from './components/Timer.jsx'
import SessionList from './components/SessionList.jsx'
import { useState } from 'react'


function App() {

  const [sessions, setSessions]  = useState([]); //array that saves Sessions time 

  const addSession = (time) =>  {               //function that updates the sessions array; this is just a tool to update sessions safely
    setSessions (prev => [...prev, time]);      //this function will be passed to timer that will use it to update the sessions array
  };

  return (
    <>
      <div className="app-container">
        <Header />
        <Timer addSession={addSession}/> {/*App lends addSessions to Timer so that it can add sessions to the array*/}
        <SessionList />
      </div>
    </>
  )
}

export default App
