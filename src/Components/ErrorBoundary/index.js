import React from 'react'

function ErrorBoundary(props) {
  const FallbackText = () => (
    <h2 className="text-4xl text-neutral-100 uppercase font-light mb-12">
      Issue will be fixed soon...
    </h2>
  )

  // Logic to change this with fetching of movies data
  let isContentLoaded = true

  return <> {isContentLoaded ? props.children : <FallbackText />} </>
}

export default ErrorBoundary
