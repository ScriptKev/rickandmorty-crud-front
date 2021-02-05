import { Link } from 'wouter'
import { useCharacter } from 'hooks/useCharacter'
import { CharacterStyled, StatusIcon } from './styled'
import DeleteIcon from 'components/Icons/DeleteIcon'
const {
  Container,
  Details,
  Image,
  Main,
  Name,
  StatusSpecies,
  DeleteCharacter
} = CharacterStyled

const Character = ({ id, image, name, species, status }) => {
  const { deleteCharacter } = useCharacter()

  const CharacterStatus = (status) => {
    if (status === 'Alive') return <StatusIcon.Alive />
    if (status === 'Dead') return <StatusIcon.Dead />
    if (status === 'unknown') return <StatusIcon.Unknown />

    return
  }

  return (
    <Container>
      <Main>
        <Image>
          <DeleteCharacter>
            <DeleteIcon id={id} removeCharacter={deleteCharacter} />
          </DeleteCharacter>
          <img src={image} alt={name} width='100%' />
        </Image>

        <Details>
          <Name>
            <Link href={`/personaje/${id}`}>
              <a><h2>{name}</h2></a>
            </Link>
          </Name>
          <StatusSpecies>
            {CharacterStatus(status)}
            {status} - {species}
          </StatusSpecies>
        </Details>
      </Main>
    </Container>
  )
}

export default Character
