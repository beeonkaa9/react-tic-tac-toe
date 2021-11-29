import React from 'react'

type MovesProps = {
  boardState: { board: string[] }[]
  onTurnChange: onTurnChange
}

const Moves = ({ boardState, onTurnChange }: MovesProps) => {
  return (
    <>
      {boardState.map((move, turn) => (
        <button
          type="button"
          className="turnButton"
          key={turn}
          onClick={() => onTurnChange(turn)}
        >
          {turn ? <p>Go to turn {turn}</p> : <p>Reset game</p>}
        </button>
      ))}
    </>
  )
}

export default Moves
