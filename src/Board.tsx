import { useState } from "react"

import Square from "./Square"

function Board() {

  const [squareValues, setSquareValues] = useState(Array(9).fill(null));

  const [isXNext, setIsXNext] = useState(true)

  const handleSquareClick = (index: number) => {
    const newSquareValues = squareValues.slice()
    if (isXNext) {
      newSquareValues[index] = 'X'
    }
    else {
      newSquareValues[index] = 'O'
    }
    setSquareValues(newSquareValues)
    setIsXNext(prevState => !prevState)
  }

  return (
    <div className="board">
      <div className="row">
        <Square value={squareValues[0]} index={0} handleSquareClick={handleSquareClick} />
        <Square value={squareValues[1]} index={1} handleSquareClick={handleSquareClick} />
        <Square value={squareValues[2]} index={2} handleSquareClick={handleSquareClick} />
      </div>
      <div className="row">
        <Square value={squareValues[3]} index={3} handleSquareClick={handleSquareClick} />
        <Square value={squareValues[4]} index={4} handleSquareClick={handleSquareClick} />
        <Square value={squareValues[5]} index={5} handleSquareClick={handleSquareClick} />
      </div>
      <div className="row">
        <Square value={squareValues[6]} index={6} handleSquareClick={handleSquareClick} />
        <Square value={squareValues[7]} index={7} handleSquareClick={handleSquareClick} />
        <Square value={squareValues[8]} index={8} handleSquareClick={handleSquareClick} />
      </div>
    </div>
  )
}

export default Board