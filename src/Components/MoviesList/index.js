import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieCard from '../MovieCard'
import { fetchMovies } from '../../Actions/fetchData'

function MoviesList(props) {
  const content = useSelector((state) => state.movies)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovies())
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12">
      {content.item.data &&
        content.item.data.map((movie) => <MovieCard key={movie.id} value={movie} />)}
    </div>
  )
}

export default MoviesList
