import React, { useEffect, useState } from 'react'
import { determineWin } from '../utils/determineWin'
import { Moves } from './Moves'
import { Square } from './Square'
import { Status } from './Status'

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
  const currentBoardState = boardState.slice(0, turn + 1)
  const currentMove = currentBoardState[currentBoardState.length - 1]
  const board = currentMove.board.slice(0)
  const winner = determineWin(board)

  function handleTurn(index: number) {
    if (determineWin(board)) {
      return board[index]
    }

    setTurn(turn + 1)

    playerOne ? (board[index] = 'X') : (board[index] = 'O')

    //if player one, then change to player two (for next turn)
    playerOne ? setPlayerOne(false) : setPlayerOne(true)

    setBoardState([...boardState, { board: board }])
  }

  //to access previous moves and undo them; goes to index of turn
  //requested, access the board property there, and remove the rest of the arrays
  //in boardState after the turn's index
  function changeTurn(turn: number) {
    const newBoard = boardState.slice(0, turn + 1)
    setTurn(turn)
    turn % 2 === 0 ? setPlayerOne(true) : setPlayerOne(false)

    setBoardState([...newBoard])
  }

  // useEffect(() => {
  //   winner ? changeTurn(0) : null
  // }, [winner])

  return (
    <>
      <div className="gameStatus">
        <Status board={board} playerOne={playerOne} winner={winner} />
      </div>
      <div className="gameSpace">
        <div className="board">
          {boardState[boardState.length - 1].board.map((squares, i) => (
            <Square
              key={i}
              index={i}
              handleTurn={(index) => handleTurn(index)}
              board={board}
            />
          ))}
        </div>

        <div className="gameMoves">
          <Moves boardState={boardState} changeTurn={changeTurn} />
        </div>
      </div>
    </>
  )
}
