import axios from 'axios'
import { fetchDataRequest, fetchDataSuccess, fetchDataError } from './action'

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
