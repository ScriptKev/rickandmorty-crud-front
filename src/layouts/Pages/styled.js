import { StyledCommons } from 'styled-commons'
import styled from 'styled-components'
const { Flex, FullSpace } = StyledCommons

export const PagesLayoutStyled = {
  Container: styled(FullSpace)`
    grid-area: pages;
    max-width: 1200px;
    margin: 0 auto;
    min-height: 85vh;
  `,

  Padding: styled.div`
    padding: 20px 10px ;
  `
}