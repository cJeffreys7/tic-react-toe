import React from 'react'
import Button from '@mui/material/Button'

export default function BasicButton({ text, handleClick }) {
  return (
    <Button variant="contained" onClick={handleClick}>{text}</Button>
  )
}