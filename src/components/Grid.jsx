import React, { useEffect, useState } from 'react'
import GridSquare from './GridSquare'
import styles from './Grid.module.css'
import { detectMatch } from '../utils/matchDetector'

export default function Grid() {
  const [player, setPlayer] = useState("Player 1")

  const handleClick = () => {
    setPlayer(player === "Player 1" ? "Player 2" : "Player 1")
    detectMatch(grid, 4, player === "Player 1", 3, 3)
  }

  const grid = [...Array(9)].map((_, i) => <GridSquare player={player} handleClick={handleClick} key={i}/>)

  useEffect(() => {
    console.log(grid)
  }, [player])

  return (
    <div className={styles.gridSpace}>
      {grid}
    </div>
  )
}