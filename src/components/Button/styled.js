import styled from 'styled-components'

export const ButtonStyled = {
  Main: styled.button`
    margin: 0px;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid rgb(255, 152, 0);
    background: transparent;
    color: rgb(51, 51, 51);
    transition: all 0.1s ease 0s;
    cursor: pointer;

    &:hover {
      background: rgb(255, 152, 0);
    }
  `,
}