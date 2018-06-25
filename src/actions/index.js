import fetch from 'isomorphic-fetch'

export function fetchPokemons () {
  return dispatch => {
    dispatch(fetchPokemonsBegin())
    return fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        // console.log(json)
        dispatch(fetchPokemonsSuccess(json.results))
        return json.results
      })
      .catch(error => dispatch(fetchPokemonsFailure(error)))
  }
}

export function fetchPokemonItem (url) {
  return dispatch => {
    dispatch(fetchPokemonItemBegin(url))
    return fetch(url)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchPokemonItemSuccess(json.sprites))
        return json.sprites
      })
      // .catch(error => dispatch(fetchPokemonsFailure(error)))
  }
}

// Handle HTTP errors since fetch won't.
let handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}

export const FETCH_POKEMONS_BEGIN = 'FETCH_POKEMONS_BEGIN'
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS'
export const FETCH_POKEMONS_FAILURE = 'FETCH_POKEMONS_FAILURE'
export const CHOOSE_POKEMON = 'CHOOSE_POKEMON'

export const FETCH_POKEMON_ITEM_BEGIN = 'FETCH_POKEMON_ITEM_BEGIN'
export const FETCH_POKEMON_ITEM_SUCCESS = 'FETCH_POKEMON_ITEM_SUCCESS'

export const fetchPokemonsBegin = () => ({
  type: FETCH_POKEMONS_BEGIN
})

export const fetchPokemonsSuccess = results => ({
  type: FETCH_POKEMONS_SUCCESS,
  payload: { results }
})

export const fetchPokemonsFailure = error => ({
  type: FETCH_POKEMONS_FAILURE,
  payload: { error }
})

export const fetchPokemonItemBegin = (url) => ({
  type: FETCH_POKEMON_ITEM_BEGIN,
  payload: url
})

export const choosePokemon = pokemon => ({
  type: CHOOSE_POKEMON,
  payload: { pokemon }
})

export const fetchPokemonItemSuccess = sprites => ({
  type: FETCH_POKEMON_ITEM_SUCCESS,
  payload: { sprites }
})


