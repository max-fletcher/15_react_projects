import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Modal = () => {
  // importing modal functions from context
  const {isModalOpen, closeModal} = useGlobalContext()
  // logging the functions imported from context
  console.log(isModalOpen, closeModal);

  return (
    // show-modal
    <div className={`modal-overlay ${isModalOpen && 'show-modal'}`}>
      <div className='modal-container'>
        <h3> Modal Content </h3>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal
