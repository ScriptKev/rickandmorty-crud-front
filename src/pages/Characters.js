import { useEffect, useContext } from 'react'
import { getCharacters } from 'services/api'
import CharactersList from 'components/CharactersList'
import Loader from 'components/Loader'
import { useCharacter } from 'hooks/useCharacter'
import { ModalContext } from 'context/modalContext'
import { ButtonStyled } from 'components/Button/styled'


export default function Characters() {
  const { characters, isLoading, addCharacter } = useCharacter()
  const { openModal } = useContext(ModalContext)

  useEffect(() => {
    window.scrollTo(0, 0)
    getCharacters()
      .then(characters => {
        addCharacter(characters)
        isLoading(false)
      })
  }, [])

  if (characters.isLoading) return <Loader />

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
        <div>
          <h2>Personajes</h2>
        </div>

        <div style={{ marginLeft: '20px' }}>
          <ButtonStyled.Main onClick={() => openModal()}>Añadir Personaje</ButtonStyled.Main>
        </div>
      </div>
      <CharactersList characters={characters.data} />
    </>
  )
}
