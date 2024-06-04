import { useState, useEffect } from "react"

import Square from "./Square"
import checkWinner from "./checkWinner";

function Board() {

  // value of each individual box
  const [squareValues, setSquareValues] = useState(Array(9).fill(null));
  // whether to mark the box with an 'X' or 'O'
  const [isXNext, setIsXNext] = useState(true)
  // for 'New Game' button
  const [newGameOption, setNewGameOption] = useState(false)

  const handleSquareClick = (index: number) => {
    // do nothing if the box already has a value or the game has already a winner
    if (squareValues[index] || checkWinner(squareValues)) {
      return
    }

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

  const winner = checkWinner(squareValues)
  let status = ''
  if (winner) {
    status = winner + ' won!'
  }
  else {
    status = 'Player: ' + (isXNext ? 'X' : 'O')
  }

  const createNewgame = () => {
    const nullValues = Array(squareValues.length).fill(null)
    setSquareValues(nullValues)
    setIsXNext(true)
    setNewGameOption(false)
  }

  useEffect(() => {
    if (winner) {
      setNewGameOption(true)
    }
  }, [winner])

  return (
    <div className="board">
      <h3 className="status">{status}</h3>
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
      {
        newGameOption && <button onClick={createNewgame}>New game</button>
      }
    </div>
  )
}

export default Board