import axios from 'axios'
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataError,
  updateMovieRequest,
  updateMovieSuccess,
  updateMovieError,
  createMovieRequest,
  createMovieSuccess,
  createMovieError,
  removeMovieRequest,
  removeMovieSuccess,
  removeMovieError
} from './action'

export function fetchMovies(currentFetchParams) {
  return (dispatch) => {
    dispatch(fetchDataRequest())
    axios
      .get(`http://localhost:4000/movies`, {
        params: currentFetchParams
      })
      .then((response) => {
        dispatch(fetchDataSuccess(response.data))
      })
      .catch((error) => {
        dispatch(fetchDataError(error))
      })
  }
}

export function updateMovie(payload) {
  return (dispatch) => {
    dispatch(updateMovieRequest())
    axios
      .put(`http://localhost:4000/movies`, payload)
      .then((response) => {
        dispatch(updateMovieSuccess(response.data))
      })
      .catch((error) => {
        dispatch(updateMovieError(error))
      })
  }
}

export function createMovie(payload) {
  return (dispatch) => {
    dispatch(createMovieRequest())
    axios
      .post(`http://localhost:4000/movies`, payload)
      .then((response) => {
        dispatch(createMovieSuccess(response.data))
      })
      .catch((error) => {
        dispatch(createMovieError(error))
      })
  }
}

export function removeMovie(id) {
  return (dispatch) => {
    dispatch(removeMovieRequest())
    axios
      .delete(`http://localhost:4000/movies/${id}`)
      .then((response) => {
        dispatch(removeMovieSuccess(response.data))
      })
      .catch((error) => {
        dispatch(removeMovieError(error))
      })
  }
}
