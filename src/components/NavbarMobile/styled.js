import styled from 'styled-components'

export const NavbarMobileStyled = {
  Container: styled.div`
    width: 100%;
    height: 50px;
    background-color: #f9f9f9;
    position: fixed;
    bottom: 0;
    box-shadow: 0px -3px 20px #0000006b;
    border-radius: 20px 20px 0 0;

    @media screen and (min-width: 800px) {
      display: none;
    }  `,

  Main: styled.nav`
    width: 100%;
    height: 100%;
  `,

  Grid: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    width: 100%;
    height: 100%;
    column-gap: 10px;
    justify-items: center;
    align-items: center;

    & .newPhoto {
      margin-top: -50px;
      background-color: #f9f9f9;
      width: 55px;
      height: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;

      & .bg {
        background: linear-gradient(45deg, rgba(227,59,104,1) 22%, rgba(250,166,71,1) 100%);
        height: 82%;
        width: 82%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        box-shadow: 0px 7px 15px #00000045;
      }
    }
  `
}