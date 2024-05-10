import { Button } from '../Button'
import { Tag } from '../Tag'

import { useDispatch } from 'react-redux'
import { addToCart, open } from '../../store/reducers/cart'
import { converToBrl } from '../../utils'
import * as S from './styles'

type Props = {
  game: Game
}

export const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(game))
    dispatch(open())
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>

        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {converToBrl(game.prices.old)}</span>
            )}
            {game.prices.current && <>Por {converToBrl(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              title="Clique aqui para adicionar este jogo ao carrinho"
              variant="primary"
              onClick={handleAddToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}
