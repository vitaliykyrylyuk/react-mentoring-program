import React from 'react'
import { useSelector } from 'react-redux'

function ResultsCount() {
  const content = useSelector((state) => state.movies.list)
  
  return (
    <div className="text-neutral-100 text-sm font-light py-3">
      <span className="font-bold">{content.item?.totalAmount ?? 0}</span> movies found
    </div>
  )
}

export default ResultsCount
