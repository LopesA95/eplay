import { Button } from '../Button'
import { Loader } from '../Loader'
import { Tag } from '../Tag'

import { useGetFeaturedGameQuery } from '../../services/api'
import { converToBrl } from '../../utils'

import * as S from './styles'

export const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            De <span>{converToBrl(game.prices.old)}</span>
            <br />
            por apenas {converToBrl(game.prices.current)}
          </S.Prices>
        </div>
        <Button
          type="link"
          to="/products/${id}"
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}
