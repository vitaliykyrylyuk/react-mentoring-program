import React from 'react'
import Button from '../Button'

function DeleteForm(props) {
  const { id, toggleModal } = props

  function handleModal(modalState) {
    toggleModal(modalState)
  }

  return (
    <form action={id ? `delete/${id}` : ''} method="POST">
      <div className="mt-6 text-white">Are you sure you want to delete this movie?</div>
      <div className="mt-6 flex justify-end">
        <Button theme={'primary'} onClick={() => handleModal(false)} text={'Confirm'} />
      </div>
    </form>
  )
}

export default DeleteForm
