import React, { useEffect } from 'react'

type StatusProps = {
  playerOne: boolean
  board: string[]
  winner: any
}

export function Status({ board, playerOne, winner }: StatusProps): JSX.Element {
  console.log({ board })
  const player = playerOne ? 1 : 2

  return (
    <>
      {winner ? (
        <h1>Player {playerOne ? 2 : 1} wins! </h1>
      ) : (
        <h1>Player {player}&#39;s turn</h1>
      )}
    </>
  )
}
