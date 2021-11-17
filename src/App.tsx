import React from 'react'
import './App.css'
import { Board } from './components/Board'

function App() {
  return (
    <>
      <div className="App">
        <header className="AppHeader">
          <h1>Tic Tac Toe!</h1>
        </header>
        <Board />
      </div>
    </>
  )
}

export default App
