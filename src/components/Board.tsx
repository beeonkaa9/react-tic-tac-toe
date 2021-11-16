import React, { useState } from 'react'
import { Square } from './Square'

export function Board(): JSX.Element {
  const [turn, setTurn] = useState(0)
  const [boardState, setBoardState] = useState([
    {
      board: ['', '', '', '', '', '', '', '', ''],
    },
  ])

  const [playerOne, setPlayerOne] = useState(true)

  //access boardState to record player's moves and save them into array
  //this accesses the board property within boardState
  const moveList = boardState.slice(0, turn + 1)
  const currentMove = moveList[moveList.length - 1]
  const board = currentMove.board.slice(0)

  function handleTurn(index: number) {
    setTurn(turn + 1)

    playerOne ? (board[index] = 'X') : (board[index] = 'O')

    //if player one, then change to player two (for next turn)
    playerOne ? setPlayerOne(false) : setPlayerOne(true)

    setBoardState([...boardState, { board: board }])
  }

  function changeTurn(turn: number) {
    const newBoard = boardState.slice(0, turn + 1)
    setTurn(turn)
    turn % 2 === 0 ? setPlayerOne(true) : setPlayerOne(false)

    setBoardState([...newBoard])
  }

  return (
    <>
      <div className="board">
        <Square
          turn={turn}
          index={0}
          handleTurn={(index) => handleTurn(index)}
          board={board}
        />
        <Square
          turn={turn}
          index={1}
          handleTurn={(index) => handleTurn(index)}
          board={board}
        />
        <Square
          turn={turn}
          index={2}
          handleTurn={(index) => handleTurn(index)}
          board={board}
        />

        <Square
          turn={turn}
          index={3}
          handleTurn={(index) => handleTurn(index)}
          board={board}
        />
        <Square
          turn={turn}
          index={4}
          handleTurn={(index) => handleTurn(index)}
          board={board}
        />
        <Square
          turn={turn}
          index={5}
          handleTurn={(index) => handleTurn(index)}
          board={board}
        />

        <Square
          turn={turn}
          index={6}
          handleTurn={(index) => handleTurn(index)}
          board={board}
        />
        <Square
          turn={turn}
          index={7}
          handleTurn={(index) => handleTurn(index)}
          board={board}
        />
        <Square
          turn={turn}
          index={8}
          handleTurn={(index) => handleTurn(index)}
          board={board}
        />
      </div>

      <div className="gameMoves">
        {boardState.map((move, turn) => (
          <button
            type="button"
            className="turnButton"
            key={turn}
            onClick={() => changeTurn(turn)}
          >
            {turn ? <p>Go to turn {turn}</p> : <p>Reset game</p>}
          </button>
        ))}
      </div>

      {/* <div className="board">
        {boardState.map((square, index) => (
          <Square
            key={index}
            index={index}
            playerOne={playerOne}
            handleTurn={(index) => handleTurn(index)}
          />
        ))}
      </div> */}
    </>
  )
}
