import React from 'react'
import MovieCard from '../MovieCard'

function MoviesList() {
  const movies = [
    {
      id: 1,
      image: `https://api.lorem.space/image/movie?w=300&h=500&hash=${Math.random()}`,
      title: 'Pulp Fiction',
      genre: 'Action & Adventure',
      year: '2004'
    },
    {
      id: 2,
      image: `https://api.lorem.space/image/movie?w=300&h=500&hash=${Math.random()}`,
      title: 'Bohemian Rhapsody',
      genre: 'Drama, Biography, Music',
      year: '2003'
    },
    {
      id: 3,
      image: `https://api.lorem.space/image/movie?w=300&h=500&hash=${Math.random()}`,
      title: 'Kill Bill: Vol 2',
      genre: 'Oscar winning Movie',
      year: '1994'
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12">
      {movies.map((movie) => (
        <MovieCard key={movie.id} value={movie} />
      ))}
    </div>
  )
}

export default MoviesList
