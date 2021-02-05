import { StyledCommons } from 'styled-commons'
import styled from 'styled-components'
const { Flex, FullSpace } = StyledCommons

export const NavbarStyled = {
  Container: styled(FullSpace)`
    background-color: #eee;
    grid-area: navbar;
    border-radius: 0 0 10px 10px;
  `,

  Main: styled.nav`
    height: 8vh;
    padding: 0 20px;
  `,

  Flex: styled(Flex)`
    justify-content: space-between;
  `
}