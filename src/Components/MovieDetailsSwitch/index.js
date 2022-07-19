import React, { useContext } from 'react'
import Button from '../Button'
import { SearchIcon } from '../Icons'
import { useSearchParams } from 'react-router-dom'

function MovieDetailsSwitch(props) {
  const { toggleModal, isMovieDetailsVisible } = props
  const [searchParams, setSearchParams] = useSearchParams()
  const searchParamsValues = Object.fromEntries(searchParams)

  const switchToSearch = () => {
    setSearchParams({
      ...searchParamsValues,
      movie: ''
    })
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
