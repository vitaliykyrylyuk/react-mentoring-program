import React from 'react'
import Button from '../Button'
import Input from '../Input'

function MovieForm(props) {
  const { id, toggleModal } = props

  function handleModal(modalState) {
    toggleModal(modalState)
  }

  return (
    <form action={id ? `edit/${id}` : ''} method="POST">
      <div className="grid grid-cols-7 gap-6">
        <div className="col-span-7 sm:col-span-4">
          <Input label="title" type="text" name="title" id="title" placeholder="Movie title" />
        </div>
        <div className="col-span-7 sm:col-span-3">
          <Input
            label="release date"
            type="date"
            name="release-date"
            id="release-date"
            placeholder="Select Date"
          />
        </div>
        <div className="col-span-7 sm:col-span-4">
          <Input
            label="MOVIE URL"
            type="text"
            name="movie-url"
            id="movie-url"
            placeholder="Movie title"
          />
        </div>
        <div className="col-span-7 sm:col-span-3">
          <Input label="rating" type="text" name="rating" id="rating" placeholder="7.8" />
        </div>
        <div className="col-span-7 sm:col-span-4">
          <Input label="genre" type="text" name="genre" id="genre" placeholder="Select Genre" />
        </div>
        <div className="col-span-7 sm:col-span-3">
          <Input label="runtime" type="text" name="runtime" id="runtime" placeholder="Minutes" />
        </div>
      </div>
      <div className="mt-6">
        <Input
          label="overview"
          type="textarea"
          name="overview"
          id="overview"
          placeholder="Movie description"
          rows={3}
          defaultValue={''}
        />
      </div>
      <div className="mt-6 flex justify-end">
        <Button
          className={'ml-5'}
          theme={'outline'}
          onClick={() => handleModal(false)}
          text={'Reset'}
        />
        <Button
          className={'ml-5'}
          theme={'primary'}
          onClick={() => handleModal(false)}
          text={'Submit'}
        />
      </div>
    </form>
  )
}

export default MovieForm
