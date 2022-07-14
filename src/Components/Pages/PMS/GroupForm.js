import React from 'react'


const GroupForm = ({handleSubmit, heading, value, setValue, setShowModal, confirmButtonText}) => {
  return (
    <form onSubmit={handleSubmit} className='GroupForm'>
        <h3>
            {heading}
        </h3>
        <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type='text'
            placeholder='Group name...'
            autoFocus
        />
        <button className='cancel' role='button' onClick={() => setShowModal(false)}>
            cancel
        </button>
        <button className='confirm'>
            {confirmButtonText}
        </button>
    </form>
  )
}

export default GroupForm; 