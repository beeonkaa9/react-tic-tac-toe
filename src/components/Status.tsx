import React from 'react'
import determineWin from '../utils/determineWin'

type StatusProps = {
  playerOne: boolean
  board: string[]
}

const Status = ({ board, playerOne }: StatusProps) => {
  const player = playerOne ? 1 : 2
  const isFullBoard = board.every((square) => square === 'X' || square === 'O')
  const winner = determineWin(board)

  return (
    <>
      <h1>
        {winner
          ? `Player ${
              winner === 'X' ? 1 : 2
            } wins! Click "Reset game" to play again`
          : isFullBoard
          ? 'Player 1 and 2 tied! Click "Reset game" to play again'
          : `Player ${player}'s turn`}
      </h1>
    </>
  )
}

export default Status
