import React, { useState } from 'react'
import GridSquare from './GridSquare'
import styles from './Grid.module.css'

export default function Grid() {
  const [player, setPlayer] = useState("Player 1")

  const handleClick = () => {
    setPlayer(player === "Player 1" ? "Player 2" : "Player 1")
    console.log("Change Player")
  }

  const grids = [...Array(9)].map((_, i) => <GridSquare player={player} handleClick={handleClick} key={i}/>)


  return (
    <div className={styles.gridSpace}>
      {grids}
    </div>
  )
}