import { PagesLayoutStyled } from './styled'
const { Container, Padding } = PagesLayoutStyled

const PagesLayout = ({ children }) => {
  return (
    <Container>
      <Padding>
        {children}
      </Padding>
    </Container>
  )
}

export default PagesLayout
