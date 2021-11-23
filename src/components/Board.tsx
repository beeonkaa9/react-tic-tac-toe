import React, { useState } from 'react'
import { determineWin } from '../utils/determineWin'
import { Moves } from './Moves'
import { Square } from './Square'
import { Status } from './Status'

export function Board(): JSX.Element {
  const [turn, setTurn] = useState(0)
  const [gameHistory, setGameHistory] = useState([
    {
      board: ['', '', '', '', '', '', '', '', ''],
    },
  ])
  const [isplayerOnesTurn, setIsPlayerOnesTurn] = useState(true)

  /*
    access boardState to record player's moves and save them into array;
    this accesses the board property within boardState for each turn
  */
  const currentBoardState = gameHistory.slice(0, turn + 1)
  const currentMove = currentBoardState[currentBoardState.length - 1]
  const board = currentMove.board.slice(0)
  const winner = determineWin(board)

  return (
    <>
      <div className="gameStatus">
        <Status board={board} playerOne={isplayerOnesTurn} winner={winner} />
      </div>
      <div className="gameSpace">
        <div className="board">
          {gameHistory[gameHistory.length - 1].board.map((squares, i) => (
            <Square
              key={i}
              index={i}
              turn={turn}
              handleTurn={(index) => {
                if (determineWin(board)) {
                  return board[index]
                }
                setTurn(turn + 1)
                isplayerOnesTurn ? (board[index] = 'X') : (board[index] = 'O')
                isplayerOnesTurn
                  ? setIsPlayerOnesTurn(false)
                  : setIsPlayerOnesTurn(true)
                setGameHistory([...gameHistory, { board: board }])
              }}
              board={board}
            />
          ))}
        </div>

        <div className="gameMoves">
          <Moves
            boardState={gameHistory}
            changeTurn={(turn) => {
              const newBoard = gameHistory.slice(0, turn + 1)
              setTurn(turn)
              turn % 2 === 0
                ? setIsPlayerOnesTurn(true)
                : setIsPlayerOnesTurn(false)

              setGameHistory([...newBoard])
            }}
          />
        </div>
      </div>
    </>
  )
}
