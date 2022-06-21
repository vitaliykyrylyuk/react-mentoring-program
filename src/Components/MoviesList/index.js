import React from 'react'
import MovieCard from '../MovieCard'

function MoviesList() {
  const movies = [
    {
      id: 1,
      image: `https://api.lorem.space/image/movie?w=300&h=500&hash=${Math.random()}`,
      title: 'Pulp Fiction',
      genre: 'Action & Adventure',
      year: '2004',
      duration: '154 min',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aspernatur at cumque, cupiditate debitis delectus dolore, doloribus ducimus explicabo laudantium minima natus neque nihil non, quaerat quod ratione sunt voluptates voluptatum. Amet at dignissimos dolor doloremque, dolores ea est eum excepturi exercitationem explicabo, impedit inventore ipsum numquam obcaecati officia placeat provident saepe totam ullam veritatis vitae voluptate voluptatibus! Accusantium adipisci amet commodi, eveniet exercitationem incidunt laborum maiores maxime necessitatibus nihil perspiciatis quis quod reprehenderit, saepe sapiente sed sunt vero voluptate!',
      rating: '4.3'
    },
    {
      id: 2,
      image: `https://api.lorem.space/image/movie?w=300&h=500&hash=${Math.random()}`,
      title: 'Bohemian Rhapsody',
      genre: 'Drama, Biography, Music',
      year: '2003',
      duration: '144 min',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aspernatur at cumque, cupiditate debitis delectus dolore, doloribus ducimus explicabo laudantium minima natus neque nihil non, quaerat quod ratione sunt voluptates voluptatum. Amet at dignissimos dolor doloremque, dolores ea est eum excepturi exercitationem explicabo, impedit inventore ipsum numquam obcaecati officia placeat provident saepe totam ullam veritatis vitae voluptate voluptatibus! Accusantium adipisci amet commodi, eveniet exercitationem incidunt laborum maiores maxime necessitatibus nihil perspiciatis quis quod reprehenderit, saepe sapiente sed sunt vero voluptate!',
      rating: '4.8'
    },
    {
      id: 3,
      image: `https://api.lorem.space/image/movie?w=300&h=500&hash=${Math.random()}`,
      title: 'Kill Bill: Vol 2',
      genre: 'Oscar winning Movie',
      year: '1994',
      duration: '164 min',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aspernatur at cumque, cupiditate debitis delectus dolore, doloribus ducimus explicabo laudantium minima natus neque nihil non, quaerat quod ratione sunt voluptates voluptatum. Amet at dignissimos dolor doloremque, dolores ea est eum excepturi exercitationem explicabo, impedit inventore ipsum numquam obcaecati officia placeat provident saepe totam ullam veritatis vitae voluptate voluptatibus! Accusantium adipisci amet commodi, eveniet exercitationem incidunt laborum maiores maxime necessitatibus nihil perspiciatis quis quod reprehenderit, saepe sapiente sed sunt vero voluptate!',
      rating: '4.5'
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
