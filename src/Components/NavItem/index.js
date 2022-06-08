import React from 'react'

function NavItem(props) {
  const { value, isActive, title } = props
  return (
    <a
      href={`${value}`}
      className={`p-1 text-neutral-100 text-sm py-3 px-3 hover:text-rose-400 uppercase ${
        isActive && 'border-b-2 border-rose-400'
      }`}>
      {title}
    </a>
  )
}

NavItem.defaultProps = {
  isActive: false
}

export default NavItem
