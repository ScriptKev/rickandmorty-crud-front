import Character from 'components/Character'
import { CharacterListSyled } from './styled'
const { Container } = CharacterListSyled

const CharactersList = ({ characters }) =>
  <Container>
    {
      characters.map(({ id, name, image, species, status }) =>
        <Character
          key={id}
          name={name}
          image={image}
          species={species}
          status={status}
          id={id}
        />
      )
    }
  </Container>

export default CharactersList