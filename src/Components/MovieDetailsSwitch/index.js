import React, { useContext } from 'react'
import Button from '../Button'
import { SearchIcon } from '../Icons'
import { MovieContext } from '../../Utils/MovieContext'

function MovieDetailsSwitch(props) {
  const { toggleModal, isMovieDetailsVisible } = props
  const { setCurrentMovie } = useContext(MovieContext)

  const switchToSearch = () => {
    setCurrentMovie({})
  }

  return (
    <>
      {isMovieDetailsVisible ? (
        <SearchIcon
          className="h-6 w-6 text-rose-400 cursor-pointer"
          onClick={() => switchToSearch()}
        />
      ) : (
        <Button theme={'secondary'} text={'+ add movie'} onClick={() => toggleModal(true)} />
      )}
    </>
  )
}

export default MovieDetailsSwitch
