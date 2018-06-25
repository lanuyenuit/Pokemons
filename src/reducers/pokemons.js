import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  CHOOSE_POKEMON

} from '../actions/index'

const initialState = {
  results: [],
  loading: false,
  error: null,
  currentPokemon: {}

}

let productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload.results
      }

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        results: []
      }

    case CHOOSE_POKEMON:
      return {
        ...state,
        loading: false,
        currentPokemon: action.payload.pokemon

      }

    default:
      return state
  }
}

export default productReducer
