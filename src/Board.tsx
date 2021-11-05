import React, { useState } from 'react'
import { Square } from './Square'

export function Board(): JSX.Element {
  const [turn, setTurn] = useState(1)

  function handleClick() {
    setTurn(turn + 1)
  }

  return (
    <>
      <div>
        <Square turn={turn} handleClick={handleClick} />
        <Square turn={turn} handleClick={handleClick} />
        <Square turn={turn} handleClick={handleClick} />
      </div>
      <div>
        <Square turn={turn} handleClick={handleClick} />
        <Square turn={turn} handleClick={handleClick} />
        <Square turn={turn} handleClick={handleClick} />
      </div>
      <div>
        <Square turn={turn} handleClick={handleClick} />
        <Square turn={turn} handleClick={handleClick} />
        <Square turn={turn} handleClick={handleClick} />
      </div>
    </>
  )
}
