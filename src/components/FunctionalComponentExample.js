import React, { useState } from 'react'

function FunctionalComponentExample (props) {
  const initialName = () => props?.name ?? 'Functional component!';
  const [name, setName] = useState(initialName)
  
  const clearName = () => setName((name.slice(0, name.length - 1)))
  const fixName = () => setName((initialName))
  
  return (
    <div>
      <h2>And I'm from {name}</h2>
      <button onClick={clearName}>Clear name</button>~
      <button onClick={fixName}>Fix</button>
    </div>
  )
}

export default FunctionalComponentExample
