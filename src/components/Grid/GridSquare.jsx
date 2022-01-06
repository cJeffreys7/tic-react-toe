import React from 'react'
import styles from './GridSquare.module.css'

export default function GridSquare(props) {
  const marker = props.marker ? props.marker === 1 ? "X" : "O" : null


  const handleClick = () => {
    if (!marker && !props.win) {
      props.handleClick(props.index)
    }
  }

  return (
    <div className={styles.square} onClick={handleClick}>
      {marker}
    </div>
  )
}