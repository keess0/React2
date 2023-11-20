import {useState, useRef, useEffect} from 'react'
import './App.css'
import List from './components/NoteList.jsx'




function App() {

  return (
    <div className="App_css"> 
      <h1>Notas:</h1>
      <List />
    </div>
  )
}

export default App