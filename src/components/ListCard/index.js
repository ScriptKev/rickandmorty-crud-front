import { ListCardStyled } from './styled'

const ListCard = ({ title }) => {
  return (
    <ListCardStyled.Episodes>
      <ListCardStyled.Episode>
        {title}
      </ListCardStyled.Episode>
    </ListCardStyled.Episodes>
  )
}

export default ListCard
