let initialState = {
  list: {
    loading: false,
    item: [],
    error: null
  },
  currentMovie: {
    loading: false,
    item: [],
    error: null
  }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        list: {
          loading: true,
          error: null
        }
      }
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        list: {
          loading: false,
          item: action.item
        }
      }
    case 'FETCH_DATA_ERROR':
      return {
        ...state,
        list: {
          loading: false,
          error: action.payload.error,
          item: []
        }
      }

    case 'CREATE_MOVIE_REQUEST':
      return {
        ...state,
        currentMovie: {
          loading: true,
          error: null
        }
      }
    case 'CREATE_MOVIE_SUCCESS':
      return {
        ...state,
        currentMovie: {
          loading: false,
          item: action.item
        }
      }
    case 'CREATE_MOVIE_ERROR':
      return {
        ...state,
        currentMovie: {
          loading: false,
          error: action.payload.error,
          item: []
        }
      }

    case 'UPDATE_MOVIE_REQUEST':
      return {
        ...state,
        currentMovie: {
          loading: true,
          error: null
        }
      }
    case 'UPDATE_MOVIE_SUCCESS':
      return {
        ...state,
        currentMovie: {
          loading: false,
          item: action.item
        }
      }
    case 'UPDATE_MOVIE_ERROR':
      return {
        ...state,
        currentMovie: {
          loading: false,
          error: action.payload.error,
          item: []
        }
      }

    case 'REMOVE_MOVIE_REQUEST':
      return {
        ...state,
        currentMovie: {
          loading: true,
          error: null
        }
      }
    case 'REMOVE_MOVIE_SUCCESS':
      return {
        ...state,
        currentMovie: {
          loading: false,
          item: action.item
        }
      }
    case 'REMOVE_MOVIE_ERROR':
      return {
        ...state,
        currentMovie: {
          loading: false,
          error: action.payload.error,
          item: []
        }
      }

    case 'FETCH_SINGLE_MOVIE_REQUEST':
      return {
        ...state,
        currentMovie: {
          loading: true,
          error: null
        }
      }
    case 'FETCH_SINGLE_MOVIE_SUCCESS':
      return {
        ...state,
        currentMovie: {
          loading: false,
          item: action.item
        }
      }
    case 'FETCH_SINGLE_MOVIE_ERROR':
      return {
        ...state,
        currentMovie: {
          loading: false,
          error: action.payload.error,
          item: []
        }
      }
    default:
      return state
  }
}

export default reducer
