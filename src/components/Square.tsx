import React, { useEffect, useState } from 'react'

type SquareProps = {
  index: number
  turn: number
  handleTurn: HandleTurn
  board: string[]
}

const Square = ({ index, turn, handleTurn, board }: SquareProps) => {
  const [isClicked, setIsClicked] = useState(false)
  const letter = board[index]

  //if board is reset, allow squares to be clicked again
  useEffect(() => {
    turn === 0 ? setIsClicked(false) : null
  }, [turn])

  //if board state changes (via "time travel" feature), allow square to be clicked again if it is '' in board
  useEffect(() => {
    letter === '' ? setIsClicked(false) : null
  }, [letter])

  //if the button has already been clicked to set a letter, do not change it; otherwise, set the letter
  const clickButton = () => {
    handleTurn(index)
    setIsClicked(true)
  }

  return (
    <>
      <button disabled={isClicked} className="square" onClick={clickButton}>
        {letter}
      </button>
    </>
  )
}

export default Square
