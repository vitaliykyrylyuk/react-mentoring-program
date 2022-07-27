import React, { useEffect } from 'react'

import MoviesList from '../MoviesList'
import Nav from '../Nav'
import ResultsSort from '../ResultsSort'
import ResultsCount from '../ResultsCount'
import ErrorBoundary from '../ErrorBoundary'
import { FetchContextProvider } from '../../Utils/fetchContext'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies, fetchSingleMovie } from '../../Actions/fetchData'
import { useParams, useSearchParams } from 'react-router-dom'

function Main() {
  const content = useSelector((state) => state.movies.list)
  const dispatch = useDispatch()

  const { searchQuery } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const { searchBy = 'title', sortOrder, sortBy, filter, movie } = Object.fromEntries(searchParams)
  
  useEffect(() => {
    dispatch(
      fetchMovies({
        search: searchQuery,
        searchBy,
        sortOrder,
        sortBy,
        filter
      })
    )
    
    if (movie || movie === '') {
      dispatch(fetchSingleMovie(movie))
    }
  }, [searchParams, searchQuery])

  return (
    <main className="p-10 bg-gray-900 flex-grow">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex justify-between border-b-2 border-gray-600">
          <FetchContextProvider>
            <Nav />
            <ResultsSort />
          </FetchContextProvider>
        </div>
        <ResultsCount />
        <ErrorBoundary content={content}>{(props) => <MoviesList {...props} />}</ErrorBoundary>
      </div>
    </main>
  )
}

export default Main
