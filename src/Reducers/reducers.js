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

    default:
      return state
  }
}

export default reducer
