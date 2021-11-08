import React, { useState } from 'react'

type SquareProps = {
  turn: number
  handleClick: any
}

export function Square({ turn, handleClick }: SquareProps): JSX.Element {
  const [letter, setLetter] = useState('')
  const [isClicked, setIsClicked] = useState(false)

  //player 1 gets X and player 2 gets O; increase state in Board by one with handleClick()
  function handleTurn() {
    if (turn === 1 || turn % 2 === 1) {
      setLetter('X')
    } else {
      setLetter('O')
    }
    setIsClicked(true)
    handleClick()
  }

  //if the button has already been clicked to set a letter, do not change it; otherwise, set the letter
  function clickButton() {
    if (isClicked) {
      alert('You cannot change this square, please select a different one')
      letter === 'O' ? setLetter('O') : setLetter('X')
    } else {
      handleTurn()
    }
  }

  return (
    <>
      <button onClick={clickButton}>{letter}</button>
    </>
  )
}
