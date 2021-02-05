import { Link } from 'wouter'
import { NavbarStyled } from './styled'
const { Container, Main, Flex } = NavbarStyled

const Navbar = () => {
  return (
    <Container>
      <Main>
        <Flex>
          <Link href='/'>
            <h1 style={{ cursor: 'pointer' }}>Rick And Morty CRUD</h1>
          </Link>
        </Flex>
      </Main>
    </Container>
  )
}

export default Navbar
