import React, { useEffect, useState } from 'react'

type SquareProps = {
  turn: number
  index: number
  handleTurn: HandleTurn
  board: string[]
}

export function Square({
  turn,
  index,
  handleTurn,
  board,
}: SquareProps): JSX.Element {
  const [isClicked, setIsClicked] = useState(false)
  const currentBoard = board.slice(0)
  const letter = currentBoard[index]

  // useEffect(() => {
  //   turn === 0 ? setIsClicked(false) : null
  // }, [turn])

  useEffect(() => {
    letter === '' ? setIsClicked(false) : null
  }, [letter])

  //if the button has already been clicked to set a letter, do not change it; otherwise, set the letter
  function clickButton() {
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
