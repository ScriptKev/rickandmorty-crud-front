import styled from 'styled-components'

export const ListCardStyled = {
  Episodes: styled.section`
    width: 50vw;


  & h3 {
    margin-bottom: 10px;
  }
  `,

  Episode: styled.div`
  width: 100%;
  height: min-content;
  padding: 10px;
  font-size: 1.1rem;
  background-color: #eee;
  margin: 10px 0;
  border-radius: 5px;
  `
}