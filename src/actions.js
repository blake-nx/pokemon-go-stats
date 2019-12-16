import {CHANGE_SEARCH_FIELD, REQUEST_POKEMON_PENDING, REQUEST_POKEMON_SUCCESS, REQUEST_POKEMON_FAILED} from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestPokemon = () => dispatch => {
    dispatch({type: REQUEST_POKEMON_PENDING})
    fetch(process.env.REACT_APP_API_URL)
      .then(response => response.json())
      .then(data => dispatch({type: REQUEST_POKEMON_SUCCESS, payload: data}))
      .catch(error => dispatch({type: REQUEST_POKEMON_FAILED, payload: error}))
}