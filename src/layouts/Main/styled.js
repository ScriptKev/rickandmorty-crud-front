import { StyledCommons } from 'styled-commons'
import styled from 'styled-components'
const { FullSpace } = StyledCommons

export const MainLayoutStyled = {
  Grid: styled(FullSpace)`
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'sidebar pages';

    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `,
}