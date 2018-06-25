import fetch from 'isomorphic-fetch'

export function fetchProducts () {
  return dispatch => {
    dispatch(fetchProductsBegin())
    return fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchProductsSuccess(json.results))
        return json.results
      })
      .catch(error => dispatch(fetchProductsFailure(error)))
  }
}

// Handle HTTP errors since fetch won't.
let handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}

export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'
export const CHOOSE_POKEMON = 'CHOOSE_POKEMON'

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
})

export const fetchProductsSuccess = results => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { results }
})

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
})

export const choosePokemon = pokemon => ({
  type: CHOOSE_POKEMON,
  payload: { pokemon }
})
