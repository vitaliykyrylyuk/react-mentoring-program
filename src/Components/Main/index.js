import React from 'react'

import MoviesList from '../MoviesList'
import Nav from '../Nav'
import ResultsSort from '../ResultsSort'
import ResultsCount from '../ResultsCount'
import ErrorBoundary from '../ErrorBoundary'

function App() {
  return (
    <main className="p-10 bg-gray-900">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex justify-between border-b-2 border-gray-600">
          <Nav />
          <ResultsSort />
        </div>
        <ResultsCount />
        <ErrorBoundary>
          <MoviesList />
        </ErrorBoundary>
      </div>
    </main>
  )
}

export default App
