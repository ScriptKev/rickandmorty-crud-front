import { Link } from 'wouter'
import NotFoundBg from 'components/NotFoundBg'
import { NotFoundStyled } from 'layouts/NotFound'
const { Container, Message } = NotFoundStyled

export default function NotFound() {
  return (
    <Container>
      <NotFoundBg />
      <Message>
        <span>404 Pagina no Encontrada</span> <br />
        Ir a <Link to='/'><a>Personajes</a></Link>
      </Message>
    </Container>
  )
}