import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../../Actions/fetchData'
import { LoaderIcon } from '../Icons'

function ErrorBoundary({ children }) {
  const content = useSelector((state) => state.movies)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovies())
  }, [])

  const FallbackText = () => (
    <h2 className="text-4xl text-neutral-100 uppercase font-light mb-12">
      Error occurred. Issue will be fixed soon...
    </h2>
  )

  const LoadingText = () => (
    <LoaderIcon className="mx-auto w-10 h-10 text-gray-200 animate-spin fill-rose-500" />
  )

  return (
    <> {content.loading ? <LoadingText /> : content.error ? <FallbackText /> : children(content)}</>
  )
}

export default ErrorBoundary
