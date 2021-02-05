import { StrictMode } from 'react'
import { render } from 'react-dom'
import App from 'components/App'
import GlobalStyled from 'styled-commons/global-styled'

render(
  <StrictMode>
    <GlobalStyled />
    <App />
  </StrictMode>,
  document.getElementById('root')
)
