import React from 'react'

type StatusProps = {
  playerOne: boolean
  board: string[]
  winner: string
}

export function Status({ board, playerOne, winner }: StatusProps): JSX.Element {
  const player = playerOne ? 1 : 2
  const isFullBoard = board.every((square) => square === 'X' || square === 'O')
  let gameStatus = ''

  if (isFullBoard && !winner) {
    gameStatus = 'Player 1 and 2 tied! Click "Reset game" to play again'
  } else if (winner === 'X' || winner === 'O') {
    gameStatus = playerOne
      ? 'Player 2 wins! Click "Reset game" to play again'
      : 'Player 1 wins! Click "Reset game" to play again'
  } else {
    gameStatus = `Player ${player}'s turn`
  }

  return (
    <>
      <h1>{gameStatus}</h1>
    </>
  )
}
