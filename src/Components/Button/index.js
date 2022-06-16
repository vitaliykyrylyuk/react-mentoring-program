import React from 'react'

function Button(props) {
  const { className, theme, text, ...rest } = props

  const themes = {
    primary:
      'w-24 inline-flex justify-center rounded-sm border border-transparent py-3 px-16 bg-rose-400 text-base font-medium text-white hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:text-sm uppercase',
    secondary:
      'bg-opacity-20 hover:bg-gray-400 hover:text-gray-600 rounded-sm flex items-center bg-gray-500 text-rose-400 text-sm font-medium pl-2 pr-3 py-2 uppercase',
    outline:
      'w-24 inline-flex justify-center rounded-sm border border-rose-400 py-3 px-16 bg-opacity-0 text-rose-400 font-medium hover:bg-roze-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 sm:text-sm uppercase'
  }

  return (
    <button className={`${themes[theme]} ${className}`} {...rest}>
      {text}
    </button>
  )
}

export default Button
