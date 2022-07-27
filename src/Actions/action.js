import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  CREATE_MOVIE_REQUEST,
  CREATE_MOVIE_SUCCESS,
  CREATE_MOVIE_ERROR,
  UPDATE_MOVIE_REQUEST,
  UPDATE_MOVIE_SUCCESS,
  UPDATE_MOVIE_ERROR,
  REMOVE_MOVIE_REQUEST,
  REMOVE_MOVIE_SUCCESS,
  REMOVE_MOVIE_ERROR,
  FETCH_SINGLE_MOVIE_REQUEST,
  FETCH_SINGLE_MOVIE_SUCCESS,
  FETCH_SINGLE_MOVIE_ERROR
} from './actionType'

export function fetchDataRequest() {
  return {
    type: FETCH_DATA_REQUEST
  }
}

export function fetchDataSuccess(item) {
  return {
    type: FETCH_DATA_SUCCESS,
    item
  }
}

export function fetchDataError(error) {
  return {
    type: FETCH_DATA_ERROR,
    payload: { error }
  }
}

export function createMovieRequest() {
  return {
    type: CREATE_MOVIE_REQUEST
  }
}

export function createMovieSuccess(item) {
  return {
    type: CREATE_MOVIE_SUCCESS,
    item
  }
}

export function createMovieError(error) {
  return {
    type: CREATE_MOVIE_ERROR,
    payload: { error }
  }
}

export function updateMovieRequest() {
  return {
    type: UPDATE_MOVIE_REQUEST
  }
}

export function updateMovieSuccess(item) {
  return {
    type: UPDATE_MOVIE_SUCCESS,
    item
  }
}

export function updateMovieError(error) {
  return {
    type: UPDATE_MOVIE_ERROR,
    payload: { error }
  }
}

export function removeMovieRequest() {
  return {
    type: REMOVE_MOVIE_REQUEST
  }
}

export function removeMovieSuccess(item) {
  return {
    type: REMOVE_MOVIE_SUCCESS,
    item
  }
}

export function removeMovieError(error) {
  return {
    type: REMOVE_MOVIE_ERROR,
    payload: { error }
  }
}

export function fetchSingleMovieRequest() {
  return {
    type: FETCH_SINGLE_MOVIE_REQUEST
  }
}

export function fetchSingleMovieSuccess(item) {
  return {
    type: FETCH_SINGLE_MOVIE_SUCCESS,
    item
  }
}

export function fetchSingleMovieError(error) {
  return {
    type: FETCH_SINGLE_MOVIE_ERROR,
    payload: { error }
  }
}
