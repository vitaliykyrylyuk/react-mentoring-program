import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  FILTER_BY_GENRE,
  SORT_BY_GENRE,
  SORT_BY_RATING,
  SORT_BY_RELEASE_DATE
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

