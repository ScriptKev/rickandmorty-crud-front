import { ButtonStyled } from './styled'
const { Main } = ButtonStyled

const Button = ({ title, callback }) => {
  return (
    <Main onClick={() => callback}>
      {title}
    </Main>
  )
}

export default Button
