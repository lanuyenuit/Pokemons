import {
  FETCH_POKEMONS_BEGIN,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE,
  CHOOSE_POKEMON,
  FETCH_POKEMON_ITEM_BEGIN, FETCH_POKEMON_ITEM_SUCCESS

} from '../actions/index'

const initialState = {
  results: [],
  loading: false,
  error: null,
  currentPokemon: {},
  pokemonItem: {
    sprites: {
      back_default: ''
    }
  },
  url: ''

}

let productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload.results
      }

    case FETCH_POKEMONS_FAILURE:
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

    case FETCH_POKEMON_ITEM_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
        url:action.payload.url
      }

    case FETCH_POKEMON_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemonItem: action.payload.pokemonItem
      }

    default:
      return state
  }
}

export default productReducer
