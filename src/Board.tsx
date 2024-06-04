import { useState } from "react"

import Square from "./Square"

function Board() {

  const [squareValues, setSquareValues] = useState(Array(9).fill(null));

  return (
    <div>
      <div>
        <Square value={squareValues[0]}/>
        <Square value={squareValues[1]}/>
        <Square value={squareValues[2]}/>
      </div>
      <div>
        <Square value={squareValues[3]}/>
        <Square value={squareValues[4]}/>
        <Square value={squareValues[5]}/>
      </div>
      <div>
        <Square value={squareValues[6]}/>
        <Square value={squareValues[7]}/>
        <Square value={squareValues[8]}/>
      </div>
    </div>
  )
}

export default Board