import React, { useState, useContext } from 'react'
import NavItem from '../NavItem'
import { FetchContext } from '../../Utils/fetchContext'

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

  const { currentFetchParams, setCurrentFetchParams } = useContext(FetchContext)

  const [navItems, setNavItems] = useState(navLinksInitialState)

  const handleClick = (title) => {
    const filteredItems = navItems.map((item) => {
      item.isActive = item.title === title
      return item
    })

    setNavItems(filteredItems)
    setCurrentFetchParams({ ...currentFetchParams, filter: title === 'all' ? '' : title })
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
