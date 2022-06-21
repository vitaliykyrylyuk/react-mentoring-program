import React from 'react'
import Button from '../Button'
import Input from '../Input'

function SearchForm() {
  return (
    <div className="py-24 px-10 w-full">
      <div className="text-4xl text-neutral-100 uppercase font-light mb-12">find your movie</div>
      <form className="group relative w-full flex flex-wrap">
        <Input type="text" placeholder="What do you want to watch?" />
        <Button className={'ml-5 w-42'} theme={'primary'} text={'search'} />
      </form>
    </div>
  )
}

export default SearchForm
