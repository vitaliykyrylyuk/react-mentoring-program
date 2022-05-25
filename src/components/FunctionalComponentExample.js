import React, { useState } from 'react'

function FunctionalComponentExample (props) {
  const initialName = () => props?.name ?? 'Functional component!'
  const filmsArray = [
    'Pulp fiction',
    'Bohemian Rhapsody',
    'Kill Bill: Vol 2',
    'Avengers: War of Infinity',
    'Inception',
    'Reservoir dogs'
  ]
  const [name] = useState(initialName)
  const [searchTerm, setSearchTerm] = React.useState('')

  const handleChange = event => setSearchTerm(event.target.value)
  
  const results = !searchTerm
    ? filmsArray
    : filmsArray.filter(film =>
      film.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    )
  
  return (
    <div>
      <h2>And I'm from {name}</h2>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {results.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default FunctionalComponentExample
