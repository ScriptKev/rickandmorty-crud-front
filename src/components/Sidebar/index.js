import { Link } from 'wouter'
import { SidebarStyled } from './styled'
const { Container, Menu, MenuItem, Route } = SidebarStyled

const Sidebar = () => {
  return (
    <Container>
      <Menu>
        <MenuItem>
          <Link href='/personajes'>
            <Route>
              Personajes
            </Route>
          </Link>
        </MenuItem>

        <MenuItem>
          <Link href='/episodios'>
            <Route>
              Episodios
            </Route>
          </Link>
        </MenuItem>

        <MenuItem>
          <Link href='/lugares'>
            <Route>
              Lugares
            </Route>
          </Link>
        </MenuItem>
      </Menu>
    </Container>
  )
}

export default Sidebar
