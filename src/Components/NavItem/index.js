import React from 'react'

function NavItem(props) {
  const { isActive, title } = props

  function handleClick(title) {
    props.handleClick(title)
  }

  return (
    <div
      onClick={() => handleClick(title)}
      className={`p-1 text-neutral-100 text-sm py-3 px-3 hover:text-rose-400 cursor-pointer uppercase ${
        isActive && 'border-b-2 border-rose-400'
      }`}>
      {title}
    </div>
  )
}

NavItem.defaultProps = {
  isActive: false
}

export default NavItem
