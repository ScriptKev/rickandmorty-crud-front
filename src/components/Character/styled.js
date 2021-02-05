import styled from 'styled-components'

export const CharacterStyled = {
  Container: styled.div`
    max-width: 280px;
    min-width: 150px;
    height: min-content;
    background-color: #eee;
    margin: 20px 10px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    transition: all ease-in-out 200ms;
    animation: fadeIn ease 500ms;

    @keyframes fadeIn {
      0% {
        opacity:0;
        transform: translateX(-20px);
      }
      100% {
        opacity:1;
        transform: translateX(0);
      }
    }
    @-webkit-keyframes fadeIn {
      0% {
        opacity:0;
        transform: translateX(-20px);
      }
      100% {
        opacity:1;
        transform: translateX(0);
      }
    }

    &:hover {
      transform: translateY(-10px);
      & .hoverChangeColor {
        fill: rgb(255,152,0);
      }
    }

    @media only screen and (max-width: 425px) {
      margin: 20px 0;

      &:hover {
        transform: translateY(-10px);
      }
    }
  `,

  Main: styled.div`
  `,

  Image: styled.div`
    object-fit: cover;
    position: relative;

    & img {
      border-radius: 10px 10px 0 0;
    }
  `,

  Details: styled.section`
    padding: 10px 20px;
  `,

  Name: styled.div`
    & h2 {
      font-size: 1.3rem;
    }
  `,

  StatusSpecies: styled.div`
    color: black;
    font-weight: 600;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 5px 0;
  `,

  LastLocation: styled.div`
    & span {
      color: rgb(158, 158, 158);
      font-weight: 600;
      margin-bottom: 3px;
    }
  `,

  DeleteCharacter: styled.div`
    width: min-content;
    height: min-content;
    position: absolute;
    top: 10px;
    right: 10px;
  `
}

export const StatusIcon = {
  Default: styled.div`
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    background: rgb(158, 158, 158);
    border-radius: 50%;
  `,

  Unknown: styled.div`
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    background: rgb(158, 158, 158);
    border-radius: 50%;
  `,

  Alive: styled.div`
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    background: rgb(85, 204, 68);
    border-radius: 50%;
  `,

  Dead: styled.div`
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    background: #ff2b2b;
    border-radius: 50%;
  `
}