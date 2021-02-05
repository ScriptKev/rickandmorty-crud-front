import { ButtonStyled } from 'components/Button/styled'
import { useCharacter } from 'hooks/useCharacter'
import { FormStyled } from './styled'
const { Input } = FormStyled

const Form = () => {
  const { createCharacter } = useCharacter()
  const handleSubmit = (e) => {
    e.preventDefault()

    createCharacter({
      name: e.target.name.value,
      status: e.target.status.value,
      species: e.target.species.value
    })

  }

  return (
    <div>
      <form style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', margin: '5px 0 10px 0', flexDirection: 'column' }} onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='Nombre del Personaje'
          name='name'
          autoComplete='none'
        />
        <label htmlFor='species'>Estado del Personaje</label>
        <select placeholder='Estado del Personaje' name="status" id="status">
          <option value="Alive">Vivo</option>
          <option value="Dead">Muerto</option>
          <option value="unknown">Desconocido</option>
        </select>

        <label htmlFor='species'>Especie del Personaje</label>
        <select placeholder='Especie del Personaje' name="species" id="species">
          <option value="Human">Humano</option>
          <option value="Alien">Alienigena</option>
        </select>
        <ButtonStyled.Main style={{ marginTop: '10px' }} type='submit'>Crear Personaje</ButtonStyled.Main>
      </form>
    </div>
  )
}

export default Form
