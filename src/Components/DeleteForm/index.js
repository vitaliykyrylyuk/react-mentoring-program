import React from 'react'
import Button from '../Button'
import { useDispatch } from 'react-redux'
import { removeMovie } from '../../Actions/fetchData'

function DeleteForm(props) {
  const { id, toggleModal } = props
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(removeMovie(id))
    toggleModal(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-6 text-white">Are you sure you want to delete this movie?</div>
      <div className="mt-6 flex justify-end">
        <Button type="submit" theme={'primary'} text={'Confirm'} />
      </div>
    </form>
  )
}

export default DeleteForm
