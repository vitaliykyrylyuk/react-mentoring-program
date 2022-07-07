import React, { useContext } from 'react'
import Button from '../Button'
import Input from '../Input'
import GenresDropdown from '../GenresDropdown'
import { useDispatch, useSelector } from 'react-redux'
import { createMovie, updateMovie } from '../../Actions/fetchData'
import { movieContext } from '../../Utils/movieContext'
import { Formik } from 'formik'

function MovieForm(props) {
  const { id, toggleModal } = props
  const content = useSelector((state) => state.movies.list)
  const dispatch = useDispatch()
  const { setCurrentMovie } = useContext(movieContext)

  function handleModal(modalState) {
    toggleModal(modalState)
  }

  let movieToEdit = null
  let initialValues = { title: '', poster_path: '', runtime: '', overview: '', genres: [] }

  // Is edit mode
  if (id) {
    movieToEdit = content.item.data.find((item) => item.id === id)
    initialValues = movieToEdit
  }

  const availableGenres = [
    'Crime',
    'Documentary',
    'Horror',
    'Comedy',
    'Fantasy',
    'Adventure',
    'Science Fiction'
  ]

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors = {}
        if (!values.title) {
          errors.title = 'Required field'
        }
        if (!values.poster_path) {
          errors.poster_path = 'Required field'
        }
        if (!values.runtime) {
          errors.runtime = 'Required field'
        }
        if (!values.overview) {
          errors.overview = 'Required field'
        }
        if (values.genres.length === 0) {
          errors.genres = 'Required field'
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        if (id) {
          dispatch(updateMovie(values))
        } else {
          dispatch(createMovie(values))
        }

        setTimeout(() => {
          alert('Request has been processed')
          setSubmitting(false)
        }, 400)

        setCurrentMovie(values)
        handleModal(false)
      }}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue
      }) => (
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
                name="releaseDate"
                id="release-date"
                placeholder="Select Date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.releaseDate}
              />
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
                name="rating"
                id="rating"
                placeholder="7.8"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.rating}
              />
            </div>
            <div className="col-span-7 sm:col-span-4 relative">
              <GenresDropdown
                availableGenres={availableGenres}
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
      )}
    </Formik>
  )
}

export default MovieForm
