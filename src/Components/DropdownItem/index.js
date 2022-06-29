import React from 'react'

function DropdownItem(props) {
  const { onClick, text } = props

  return (
    <a
      href="#"
      className="text-white block px-4 py-2 text-sm hover:bg-rose-400"
      role="menuitem"
      tabIndex="-1"
      onClick={onClick}>
      {text}
    </a>
  )
}

export default DropdownItem
