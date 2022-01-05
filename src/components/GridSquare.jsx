import React, { useState } from 'react'
import styles from './GridSquare.module.css'

export default function GridSquare(props) {
  const [marker, setMarker] = useState("")

  const handleClick = () => {
    console.log("Clicked square")
    setMarker(props.player === "Player 1" ? "X" : "O")
    props.handleClick()
  }

  return (
    <div className={styles.square} onClick={handleClick}>
      {marker}
    </div>
  )
}