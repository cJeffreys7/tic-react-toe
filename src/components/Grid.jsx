import React, { useEffect, useState } from 'react'
import GridSquare from './GridSquare'
import styles from './Grid.module.css'
import { detectMatch } from '../utils/matchDetector'

export default function Grid() {
  const [player, setPlayer] = useState("Player 1")
  const [gridSpaces, setGridSpaces] = useState({})

  const rows = 3
  const columns = 3

  const handleClick = (index) => {
    setPlayer(player === "Player 1" ? "Player 2" : "Player 1")
    setGridSpaces(gridSpaces.map((grid, gridIndex) => gridIndex === index ? { index: gridIndex, marker: player === "Player 1" ? 1 : 2 } : grid ))
    detectMatch(gridSpaces, parseInt(index), player === "Player 1", rows, columns)
  }

  const gridBoard = [...Array(rows * columns)].map((_, i) => <GridSquare player={player} handleClick={handleClick} index={i} key={i}/>)

  useEffect(() => {
    setGridSpaces([...Array(rows * columns)].map((_, i) => {
      return { index: i, marker: 0 }
    }))

  }, [])

  console.log('Mapped grid:', gridSpaces)

  return (
    <div className={styles.gridSpace}>
      {gridBoard}
    </div>
  )
}