import React from 'react'

function Modal(props) {
  function handleModal(modalState) {
    props.toggleModal(modalState)
  }

  return (
    <div className="absolute z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
          <div className="relative bg-gray-700 text-left overflow-hidden transform transition-all sm:my-8 sm:max-w-screen-sm sm:w-full">
            <button
              type="button"
              className="absolute right-0 flex p-2 hover:bg-rose-400 focus:outline-none"
              onClick={() => handleModal(false)}>
              <span className="sr-only">Dismiss</span>
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <div className="text-lg leading-6 font-light text-neutral-100 uppercase">{props.title}</div>
                <div className="mt-3">
                  {props.children}
                </div>
              </div>
            </div>
            <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-24 inline-flex justify-center rounded-sm border border-transparent shadow-sm px-4 py-2 bg-rose-400 text-base font-medium text-white hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:text-sm uppercase">
                Submit
              </button>
              <button
                type="button"
                className="mt-3 w-24 inline-flex justify-center rounded-sm border border-rose-400 px-4 py-2 bg-opacity-0 text-rose-400 font-medium hover:bg-roze-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 sm:mt-0 sm:ml-3 sm:text-sm uppercase"
                onClick={() => handleModal(false)}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
