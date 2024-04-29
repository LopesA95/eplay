import { useEffect, useState } from 'react'
import { Game } from '../../pages/Home'
import { Button } from '../Button'
import { formatPrice } from '../ProductsList/index'
import { Tag } from '../Tag'
import { Imagem, Precos, Title } from './styles'

export const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])
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
            por apoenas {formatPrice(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to="/produtos"
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}
