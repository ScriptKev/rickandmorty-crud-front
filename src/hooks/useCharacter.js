// @ts-nocheck
import { useReducer } from 'react'
import { charactersReducer } from 'reducers/charactersReducer'

const initialState = {
  data: [],
  isLoading: true
}

const characterCustom = {
  name: '',
  status: '',
  species: ''
}

export const useCharacter = () => {
  const [characters, dispatch] = useReducer(charactersReducer, initialState)

  const createCharacter = (characterData = characterCustom) => {
    dispatch({ type: 'createCharacter', payload: characterData })
  }

  const getCharacter = (id) => {
    dispatch({ type: 'getCharacter', payload: id })
  }

  const updateCharacter = (characterData = characterCustom) => {
    dispatch({ type: 'updateCharacter', payload: characterData })
  }

  const deleteCharacter = (id) => {
    dispatch({ type: 'deleteCharacter', payload: id })
  }

  const addCharacter = (characterState = initialState.data) => {
    dispatch({ type: 'addCharacter', payload: characterState })
  }


  const isLoading = (isLoadingState = initialState.isLoading) => {
    dispatch({ type: 'isLoading', payload: isLoadingState })
  }

  return {
    characters,
    addCharacter,
    deleteCharacter,
    isLoading,
    createCharacter,
    updateCharacter,
    getCharacter
  }
}