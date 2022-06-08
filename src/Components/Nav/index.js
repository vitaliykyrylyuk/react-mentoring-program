import React from 'react'
import NavItem from '../NavItem'

function Nav() {
  const navLinks = [
    {
      title: 'all',
      isActive: true,
      value: '/'
    },
    {
      title: 'Documentary',
      value: '/'
    },
    {
      title: 'Comedy',
      value: '/'
    },
    {
      title: 'Horror',
      value: '/'
    },
    {
      title: 'crime',
      value: '/'
    }
  ]

  return (
    <div className="text-sky-500 flex">
      {navLinks.map((link) => (
        <NavItem key={link.title} isActive={link.isActive} title={link.title} value={link.value} />
      ))}
    </div>
  )
}

export default Nav
