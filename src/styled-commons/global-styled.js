import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
  body, * {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: inherit;

    &:hover {
      color: rgb(255, 152, 0);
    }
  }
  ul{ list-style: none; margin: 0; padding: 0 }
`
export default GlobalStyled
