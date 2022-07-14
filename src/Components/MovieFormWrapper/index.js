import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createMovie, updateMovie } from '../../Actions/fetchData'
import { movieContext } from '../../Utils/movieContext'
import { Formik } from 'formik'
import MovieForm from '../MovieForm'
import * as Yup from 'yup'

function MovieFormWrapper({ id, toggleModal }) {

  const IS_EDIT_MODE = id
  const content = useSelector((state) => state.movies.list)
  const dispatch = useDispatch()
  const { setCurrentMovie } = useContext(movieContext)

  const handleModal = (modalState) => {
    toggleModal(modalState)
  }

  const movieSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    poster_path: Yup.string()
      .url('Poster path should be a valid URL')
      .required('Poster path is required'),
    runtime: Yup.number()
      .min(0, 'Runtime should be greater than 0')
      .required('Runtime is required'),
    vote_average: Yup.number()
      .min(0, 'Rating should be greater or equal to 0')
      .max(10, 'Maximum rating is 10')
      .optional(),
    overview: Yup.string().required('Overview is required'),
    release_date: Yup.date()
      .default(() => new Date())
      .optional(),
    genres: Yup.array().min(1, 'Choose at least one genre').required('Genres is required')
  })

  const handleSubmit = (values, { setSubmitting }) => {
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
  }

  let initialValues = {
    title: '',
    poster_path: '',
    runtime: '',
    overview: '',
    genres: [],
    release_date: '',
    vote_average: ''
  }

  if (IS_EDIT_MODE) {
    initialValues = content.item.data.find((item) => item.id === id)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={movieSchema}
      onSubmit={handleSubmit}
      component={(props) => <MovieForm toggleModal={toggleModal} {...props} />}
    />
  )
}

export default MovieFormWrapper
