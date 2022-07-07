import React, { useEffect } from 'react'

import MoviesList from '../MoviesList'
import Nav from '../Nav'
import ResultsSort from '../ResultsSort'
import ResultsCount from '../ResultsCount'
import ErrorBoundary from '../ErrorBoundary'
import { FetchContextProvider } from '../../Utils/fetchContext'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../../Actions/fetchData'

function Main() {
  const content = useSelector((state) => state.movies.list)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovies())
  }, [])

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
