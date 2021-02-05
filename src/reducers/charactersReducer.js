import { createCharacters, getCharacters, getCharacter, deleteCharacter } from 'services/api'

export const charactersReducer = (state, action) => {
  switch (action.type) {
    case 'getCharacter':
      let characterDetail = {}

      getCharacter(action.payload)
        .then(character => characterDetail = character)
      console.log('getCharacter', characterDetail)

      return state

    case 'addCharacter':
      return {
        ...state,
        data: action.payload
      }

    case 'createCharacter':
      let charactersLoaded = []

      createCharacters(action.payload)
        .then(res => console.log('createCharacter Reducer', res))

      getCharacters()
        .then(items => console.log('getCharacters loadReducer', charactersLoaded.push(items)))

      return { ...charactersLoaded, ...state }

    case 'updateCharacter':
      return {
        ...state,
        character: action.payload
      }

    case 'deleteCharacter':
      deleteCharacter(action.payload)
      return state

    case 'isLoading':
      return {
        ...state,
        isLoading: action.payload
      }

    case 'loadCharacters':
      getCharacters()
        .then(items => console.log('getCharacters loadReducer', items))

      return {
        ...state,
        info: action.payload
      }

    default:
      return state
  }
}