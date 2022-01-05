import React from 'react'
import GridSquare from './GridSquare'
import styles from './Grid.module.css'

export default function Grid() {
  const grids = [...Array(9)].map((_, i) => <GridSquare key={i}/>)


  return (
    <div className={styles.gridSpace}>
      {grids}
    </div>
  )
}