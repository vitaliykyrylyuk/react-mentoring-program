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
  removeMovieError,
  fetchSingleMovieRequest,
  fetchSingleMovieSuccess,
  fetchSingleMovieError
} from './action'

const URL = process.env.REACT_APP_API_URL

export function fetchMovies(currentFetchParams) {
  return (dispatch) => {
    dispatch(fetchDataRequest())
    axios
      .get(`${URL}movies`, {
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

export function fetchSingleMovie(payload) {
  return (dispatch) => {
    dispatch(fetchSingleMovieRequest())
    axios
      .get(`${URL}movies/${payload}`)
      .then((response) => {
        dispatch(fetchSingleMovieSuccess(response.data))
      })
      .catch((error) => {
        dispatch(fetchSingleMovieError(error))
      })
  }
}

export function updateMovie(payload) {
  return (dispatch) => {
    dispatch(updateMovieRequest())
    axios
      .put(`${URL}movies`, payload)
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
      .post(`${URL}movies`, payload)
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
      .delete(`${URL}movies/${id}`)
      .then((response) => {
        dispatch(removeMovieSuccess(response.data))
      })
      .catch((error) => {
        dispatch(removeMovieError(error))
      })
  }
}
