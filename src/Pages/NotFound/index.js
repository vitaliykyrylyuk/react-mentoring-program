import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

function NotFound() {
  return (
    <>
      <Header />
      <main className="p-10 bg-gray-900 flex-grow">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-4xl text-neutral-100 uppercase font-light mb-12">Page not found.</h2>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default NotFound
