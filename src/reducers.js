import {
  CHANGE_SEARCH_FIELD,
  REQUEST_POKEMON_PENDING,
  REQUEST_POKEMON_SUCCESS,
  REQUEST_POKEMON_FAILED
} from "./constants";

const initialStateSearch = {
  searchField: ""
};

const initialStatePokemon = {
  isPending: false,
  pokemon: [],
  error: ''
};

export const searchPokemon = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

export const requestPokemon = (state = initialStatePokemon, action = {}) => {
  switch (action.type) {
    case REQUEST_POKEMON_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_POKEMON_SUCCESS:
      return Object.assign({}, state, {
        pokemon: action.payload,
        isPending: false
      });
    case REQUEST_POKEMON_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false
      });
    default:
      return state;
  }
};
