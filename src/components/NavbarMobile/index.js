/* eslint-disable */

import { Link } from 'wouter'
import { NavbarMobileStyled } from './styled'
const { Container, Main, Grid } = NavbarMobileStyled

const NavbarMobile = () => {
  return (
    <Container>
      <Main>
        <Grid>
          <div>
            <Link href='/personajes'>
              <a href=''>
                <h5>Personajes</h5>
              </a>
            </Link>
          </div>
          <div>
            <Link href='/lugares'>
              <a href=''>
                <h5>Lugares</h5>
              </a>
            </Link>
          </div>
          <div>
            <Link href='/episodios'>
              <a href=''>
                <h5>Episodios</h5>
              </a>
            </Link>
          </div>
        </Grid>
      </Main>
    </Container>
  )
}

export default NavbarMobile
