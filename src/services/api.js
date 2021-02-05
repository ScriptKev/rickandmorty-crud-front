const baseUrl = 'https://rickandmorty-crud-api.herokuapp.com/api'

export const getCharacters = async () => {
  return await fetch(`${baseUrl}/characters`)
    .then(res => res.json())
}

export const getEpisodes = async () => {
  return await fetch(`${baseUrl}/episodes`)
    .then(res => res.json())
}

export const getLocations = async () => {
  return await fetch(`${baseUrl}/locations`)
    .then(res => res.json())
}

export const getCharacter = async (id) => {
  return await fetch(`${baseUrl}/characters/${id}`)
    .then(res => res.json())
}

export const createCharacters = async (character) => {
  return await fetch(`${baseUrl}/characters`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(character)
  }).then(res => res.json())
}

export const updateCharacter = async (character) => {
  return await fetch(`${baseUrl}/characters`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(character)
  }).then(res => res.json())
}

export const deleteCharacter = async (id) => {
  return await fetch(`${baseUrl}/characters/${id}`, {
    method: 'DELETE'
  }).then(res => res.json())
}