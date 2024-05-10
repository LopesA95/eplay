import { useDispatch, useSelector } from 'react-redux'

import { Button } from '../Button'
import { Tag } from '../Tag'

import { RootReducer } from '../../store'
import { close, removeToCart } from '../../store/reducers/cart'
import { converToBrl } from '../../utils'

import * as S from './styles'

export const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const handleCloseCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + item.prices.current!, 0)
  }

  const handleRemoveItem = (id: number) => {
    dispatch(removeToCart(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={handleCloseCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{converToBrl(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => handleRemoveItem(item.id)} />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
        <S.Prices>
          Total de R$ {converToBrl(getTotalPrice())}{' '}
          <span>Em até 6x sem juros</span>
        </S.Prices>
        <Button title="Clique aqui para continuar com a compra " type="button">
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}
