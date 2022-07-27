import React from 'react'
import Button from '../Button'
import Input from '../Input'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'

function SearchForm() {
  const SEARCH_PATH = '/search'
  const { searchQuery } = useParams()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const handleSubmit = (event) => {
    event.preventDefault()
    const searchInputValue = event.target.searchQuery.value

    navigate({
      pathname: `${SEARCH_PATH}/${searchInputValue}`,
      search: `?${searchParams}`
    })
  }

  return (
    <div className="py-24 px-10 w-full">
      <div className="text-4xl text-neutral-100 uppercase font-light mb-12">find your movie</div>
      <form onSubmit={handleSubmit} className="group relative w-full flex flex-wrap">
        <Input
          defaultValue={searchQuery}
          name="searchQuery"
          type="text"
          placeholder="What do you want to watch?"
        />
        <Button type="submit" className={'ml-5 w-42'} theme={'primary'} text={'search'} />
      </form>
    </div>
  )
}

export default SearchForm
