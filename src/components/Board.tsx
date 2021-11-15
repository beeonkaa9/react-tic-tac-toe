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

  function handleTurn(index: number) {
    //increase turn
    setTurn(turn + 1)

    //access boardState to record player's moves and save them into array
    const moveList = boardState.slice(0, turn + 1)
    const currentMove = moveList[moveList.length - 1]
    const board = currentMove.board.slice(0)

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
          index={0}
          playerOne={playerOne}
          handleTurn={(index) => handleTurn(index)}
        />
        <Square
          index={1}
          playerOne={playerOne}
          handleTurn={(index) => handleTurn(index)}
        />
        <Square
          index={2}
          playerOne={playerOne}
          handleTurn={(index) => handleTurn(index)}
        />

        <Square
          index={3}
          playerOne={playerOne}
          handleTurn={(index) => handleTurn(index)}
        />
        <Square
          index={4}
          playerOne={playerOne}
          handleTurn={(index) => handleTurn(index)}
        />
        <Square
          index={5}
          playerOne={playerOne}
          handleTurn={(index) => handleTurn(index)}
        />

        <Square
          index={6}
          playerOne={playerOne}
          handleTurn={(index) => handleTurn(index)}
        />
        <Square
          index={7}
          playerOne={playerOne}
          handleTurn={(index) => handleTurn(index)}
        />
        <Square
          index={8}
          playerOne={playerOne}
          handleTurn={(index) => handleTurn(index)}
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
