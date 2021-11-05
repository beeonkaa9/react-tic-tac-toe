import React, { useState } from 'react'

type SquareProps = {
  turn: number
  handleClick: any
}

export function Square({ turn, handleClick }: SquareProps): JSX.Element {
  const [letter, setLetter] = useState('')
  // let isClicked = false

  function buttonClick() {
    // checkButton()
    if (turn === 1 || turn % 2 === 1) {
      setLetter('X')
    } else {
      setLetter('O')
    }
    handleClick()
    // isClicked = true
  }

  // function checkButton() {
  //   if (isClicked) {
  //     alert('you cannot change this square!')
  //     setLetter(letter)
  //   }
  // }

  return (
    <>
      <button onClick={buttonClick}>{letter}</button>
    </>
  )
}
