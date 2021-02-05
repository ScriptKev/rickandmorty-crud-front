import { StyledCommons } from 'styled-commons'
import styled from 'styled-components'
const { FullSpace } = StyledCommons

export const SidebarStyled = {
  Container: styled(FullSpace)`
    position: sticky;
    background-color: #eee;
    grid-area: sidebar;
    height: min-content;
    left: 0px;
    top: 35vh;
    padding: 20px 0;
    width: 90%;
    border-radius: 10px;
    margin: 0 auto;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  `,

  Menu: styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  `,

  MenuItem: styled.li`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: background-color ease-in-out 200ms;

    &:hover {
      background-color: #ccc;
    }
  `,

  Route: styled.a`
    width: 100%;
    height: 100%;
    padding-left: 20px;
    align-self: center;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
}