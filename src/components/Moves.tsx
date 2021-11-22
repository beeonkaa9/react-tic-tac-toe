import React from 'react'

type MovesProps = {
  boardState: { board: string[] }[]
  changeTurn: ChangeTurn
}

export function Moves({ boardState, changeTurn }: MovesProps) {
  return (
    <>
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
    </>
  )
}
