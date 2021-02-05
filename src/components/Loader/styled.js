import styled from 'styled-components'

export const SpinnerStyled = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Core: styled.div`
    border: 6px solid #1a5187;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-left-color: transparent;
    animation: spin 1s linear infinite;
    @keyframes spin {
      0% {
        transfrom: rotate(0deg)
      }
      100% {
        transform: rotate(360deg)
      }
    }
  `
}