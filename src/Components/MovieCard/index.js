import React from 'react'
import PropTypes from 'prop-types'

function MovieCard(props) {
  const { image, title, genre, year } = props.value

  return (
    <div>
      <img className="w-full" src={image} alt={title} />
      <div className="flex justify-between pt-4 font-semibold text-neutral-300 text-xl">
        <div className="">{title}</div>
        {year && (
          <div>
            <span className="px-2 py-1 border-2 rounded border-gray-700">{year}</span>
          </div>
        )}
      </div>
      {genre && (
        <div className="py-2">
          <span className="inline-block text-sm font-semibold text-gray-600">{genre}</span>
        </div>
      )}
    </div>
  )
}

MovieCard.defaultProps = {
  image: `https://api.lorem.space/image/movie?w=300&h=500&hash=${Math.random()}`,
  title: 'Default title'
}

MovieCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string,
  year: PropTypes.string
}

export default MovieCard
