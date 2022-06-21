import React from 'react'
import { XIcon } from '../Icons'

function Modal(props) {
  function handleModal(modalState) {
    props.toggleModal(modalState)
  }

  return (
    <div className="absolute z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
          <div className="relative bg-gray-900 text-left overflow-hidden transform transition-all sm:my-8 sm:max-w-screen-lg sm:w-full">
            <button
              type="button"
              className="absolute right-0 flex p-4 hover:bg-rose-400 focus:outline-none"
              onClick={() => handleModal(false)}>
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-4 w-4 text-white" />
            </button>
            <div className="p-10">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <div className="text-lg leading-6 font-light text-neutral-100 uppercase">
                  {props.title}
                </div>
                <div className="mt-3">{props.children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
