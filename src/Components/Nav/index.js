import React, { useState } from 'react'
import NavItem from '../NavItem'
import { useSearchParams } from 'react-router-dom'

function Nav() {
  const navLinksInitialState = [
    {
      title: 'all',
      isActive: true
    },
    {
      title: 'Documentary',
      isActive: false
    },
    {
      title: 'Comedy',
      isActive: false
    },
    {
      title: 'Horror',
      isActive: false
    },
    {
      title: 'Crime',
      isActive: false
    }
  ]

  const [searchParams, setSearchParams] = useSearchParams()
  const searchParamsValues = Object.fromEntries(searchParams)
  const { filter } = searchParamsValues

  if (filter) {
    navLinksInitialState.forEach((item) => {
      item.isActive = item.title.toLowerCase() === filter.toLowerCase()
    })
  }

  const [navItems, setNavItems] = useState(navLinksInitialState)

  const handleClick = (title) => {
    const filteredItems = navItems.map((item) => {
      item.isActive = item.title === title
      return item
    })

    setNavItems(filteredItems)
    setSearchParams({ ...searchParamsValues, filter: title === 'all' ? '' : title })
  }

  return (
    <div className="text-sky-500 flex">
      {navItems.map(({ title, isActive, value }) => (
        <NavItem
          handleClick={handleClick}
          key={title}
          isActive={isActive}
          title={title}
          value={value}
        />
      ))}
    </div>
  )
}

export default Nav
