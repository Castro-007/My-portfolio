import React from 'react'
import { FaBars } from "react-icons/fa"
const Modal = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null

    const handleClose = (e) => {
      if(e.target.id === 'wrapper') onClose();
    }

  return (
    <div>
      <div className='text-3xl fixed inset-0 flex justify-center items-center bg-black bg-opacity-15 backdrop-blur-md' id='wrapper' onClick={handleClose}>
        <div className='w-[600px] flex flex-col '>
            <button className='bg-black text-white hover:bg-slate-800 mb-3 p-2 rounded-md place-self-end'onClick={() => onClose()}>X</button>
            <div className='bg-white p-2 rounded-md '>
            <div className='text-black flex sma:flex-col mda:flex-col justify-around gap-4'>{children}</div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
