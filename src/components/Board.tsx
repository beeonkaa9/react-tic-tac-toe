import React, { useState } from 'react'
import determineWin from '../utils/determineWin'
import Moves from './Moves'
import Square from './Square'
import Status from './Status'

const Board = () => {
  const [turn, setTurn] = useState(0)
  const [gameHistory, setGameHistory] = useState([
    {
      board: ['', '', '', '', '', '', '', '', ''],
    },
  ])
  const [isPlayerOnesTurn, setIsPlayerOnesTurn] = useState(true)

  const board = [...gameHistory[gameHistory.length - 1].board]

  return (
    <>
      <div className="gameStatus">
        <Status board={board} playerOne={isPlayerOnesTurn} />
      </div>
      <div className="gameSpace">
        <div className="board">
          {gameHistory[gameHistory.length - 1].board.map((squares, i) => (
            <Square
              key={i}
              index={i}
              turn={turn}
              handleTurn={(index) => {
                const board = [...gameHistory[gameHistory.length - 1].board]
                if (determineWin(board)) {
                  return board[index]
                }
                setTurn(turn + 1)
                board[index] = isPlayerOnesTurn ? 'X' : 'O'
                setIsPlayerOnesTurn(!isPlayerOnesTurn)
                setGameHistory([...gameHistory, { board: board }])
              }}
              board={board}
            />
          ))}
        </div>

        <div className="gameMoves">
          <Moves
            boardState={gameHistory}
            onTurnChange={(turn) => {
              setTurn(turn)
              setIsPlayerOnesTurn(turn % 2 === 0)
              setGameHistory(gameHistory.slice(0, turn + 1))
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Board
