import React, { useEffect, useState } from 'react'
import GridSquare from './GridSquare'
import ActionModal from '../MaterialUI/ActionModal'
import styles from './Grid.module.css'
import { detectMatch } from '../../utils/matchDetector'

export default function Grid() {
  const [player, setPlayer] = useState("Player 1")
  const [gridSpaces, setGridSpaces] = useState([])
  const [win, setWin] = useState(false)
  const [resetCount, setResetCount] = useState(0)

  const rows = 3
  const columns = 3

  const handleClick = (index) => {
    if (!win) {
      setGridSpaces(gridSpaces.map((grid, gridIndex) => gridIndex === index ? { index: gridIndex, marker: player === "Player 1" ? 1 : 2 } : grid ))
      searchForMatch(index)
    }
    setPlayer(player === "Player 1" ? "Player 2" : "Player 1")
  }

  const searchForMatch = (index) => {
    setWin(detectMatch(gridSpaces, parseInt(index), player === "Player 1", rows, columns))
  }

  const resetBoard = () => {
    setResetCount(resetCount + 1)
    setWin(false)
  }

  useEffect(() => {
    setGridSpaces([...Array(rows * columns)].map((_, i) => {
      return { index: i, marker: null }
    }))
  }, [resetCount])

  return (
    <div className={styles.gridSpace}>
      {gridSpaces?.map((grid, i) => 
        <GridSquare 
          handleClick={handleClick} 
          win={win} 
          index={grid.index} 
          marker={grid.marker} 
          key={i}
        />)}
      <ActionModal open={win} title="You Win!" text={`Congrats ${player === "Player 1" ? "Player 2" : "Player 1"}, you have won!`} buttonText="Play Again?" handleClick={resetBoard}/>
    </div>
  )
}