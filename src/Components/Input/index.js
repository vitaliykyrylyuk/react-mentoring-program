import React from 'react'

function Input(props) {
  const { className, id, label, ...rest } = props

  return (
    <>
      {label && (
        <label htmlFor={id} className="block text-xs font-medium text-rose-400 mb-2 uppercase">
          {label}
        </label>
      )}
      <input
        className={`${className} focus:ring-2 bg-gray-600 bg-opacity-80 focus:ring-rose-300 focus:outline-none appearance-none flex-1 text-sm leading-6 text-white placeholder-slate-400 rounded-sm py-3 px-5 w-full`}
        id={id}
        {...rest}
      />
    </>
  )
}

export default Input
