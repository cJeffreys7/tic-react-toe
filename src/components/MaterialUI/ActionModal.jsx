import React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import BasicButton from './BasicButton'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
}

export default function ActionModal({ open, title, text, buttonText, handleClick }) {

  return (
    <div>
      <Modal
        open={open}
        // onClose=""
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">{title}</h2>
          <p id="parent-modal-description">
            {text}
          </p>
          <BasicButton text={buttonText} handleClick={handleClick}/>
        </Box>
      </Modal>
    </div>
  )
}