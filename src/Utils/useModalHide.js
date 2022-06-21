import { useState, useEffect } from 'react'

function useDetectOutsideClick(elem, initialState) {
  const [dropdownState, setDropdownState] = useState(initialState)

  useEffect(() => {
    const outerClickEvent = (e) => {
      if (elem.current !== null && !elem.current.contains(e.target)) {
        setDropdownState(!dropdownState)
      }
    }

    if (dropdownState) {
      window.addEventListener('click', outerClickEvent)
    }

    return () => {
      window.removeEventListener('click', outerClickEvent)
    }
  }, [dropdownState, elem])

  return [dropdownState, setDropdownState]
}

export default useDetectOutsideClick
