import { Tag } from '../Tag'
import { Button } from '../Button'

import { formatPrice } from '../ProductsList/index'
import { useGetFeaturedGameQuery } from '../../services/api'

import { Imagem, Precos, Title } from './styles'

export const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game.name}</Title>
          <Precos>
            De <span>{formatPrice(game.prices.old)}</span>
            <br />
            por apenas {formatPrice(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to="/products/${id}"
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}
