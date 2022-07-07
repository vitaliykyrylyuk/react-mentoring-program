import React, { useContext, useEffect } from 'react'
import { LoaderIcon } from '../Icons'

import { movieContext } from '../../Utils/movieContext'
import { fetchMovies } from '../../Actions/fetchData'
import { useDispatch } from 'react-redux'

function ErrorBoundary({ content, children }) {
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
