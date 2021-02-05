import Form from 'components/Form'
import NotFoundBg from 'components/NotFoundBg'
import { ModalStyled } from './styled'
const { Container, Box } = ModalStyled

const Modal = ({ closeModal }) => {
  return (
    <Container>
      <Box>
        <div style={{ cursor: 'pointer', position: 'absolute', top: '10px', right: '10px' }} onClick={() => closeModal()}>X</div>
        <div><span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Crear personaje</span></div>
        <div style={{ marginTop: '10px' }}>
          <NotFoundBg height='60px' width='60px' />
        </div>

        <Form />
      </Box>
    </Container>
  )
}

export default Modal