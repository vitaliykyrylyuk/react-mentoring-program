import React from 'react'
import Button from '../Button'
import Input from '../Input'
import GenresDropdown from '../GenresDropdown'

function MovieForm(props) {
  const {
    toggleModal,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setFieldValue
  } = props

  function handleModal(modalState) {
    toggleModal(modalState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-7 gap-6 text-rose-200 text-xs">
        <div className="col-span-7 sm:col-span-4">
          <Input
            label="title"
            type="text"
            name="title"
            id="title"
            placeholder="Movie title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {errors.title && touched.title && errors.title}
        </div>
        <div className="col-span-7 sm:col-span-3">
          <Input
            label="release date"
            type="date"
            name="release_date"
            id="release-date"
            placeholder="Select Date"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.release_date}
          />
          {errors.release_date && touched.release_date && errors.release_date}
        </div>
        <div className="col-span-7 sm:col-span-4">
          <Input
            label="MOVIE URL"
            type="text"
            name="poster_path"
            id="movie-url"
            placeholder="Movie title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.poster_path}
          />
          {errors.poster_path && touched.poster_path && errors.poster_path}
        </div>
        <div className="col-span-7 sm:col-span-3">
          <Input
            label="rating"
            type="number"
            min="0"
            max="10"
            step="0.1"
            name="vote_average"
            id="rating"
            placeholder="7.8"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.vote_average}
          />
          {errors.vote_average && touched.vote_average && errors.vote_average}
        </div>
        <div className="col-span-7 sm:col-span-4 relative">
          <GenresDropdown
            onChange={handleChange}
            onBlur={handleBlur}
            setFieldValue={setFieldValue}
            value={values.genres}
          />
          {errors.genres && touched.genres && errors.genres}
        </div>
        <div className="col-span-7 sm:col-span-3">
          <Input
            label="runtime"
            type="number"
            name="runtime"
            id="runtime"
            placeholder="Minutes"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.runtime}
          />
          {errors.runtime && touched.runtime && errors.runtime}
        </div>
      </div>
      <div className="mt-6 text-rose-200 text-xs">
        <Input
          as="textarea"
          label="overview"
          type="textarea"
          name="overview"
          id="overview"
          placeholder="Movie description"
          rows={3}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.overview}
        />
        {errors.overview && touched.overview && errors.overview}
      </div>
      <div className="mt-6 flex justify-end">
        <Button
          className={'ml-5'}
          theme={'outline'}
          onClick={() => handleModal(false)}
          text={'Reset'}
        />
        <Button type="submit" className={'ml-5'} theme={'primary'} text={'Submit'} />
      </div>
    </form>
  )
}

export default MovieForm
