import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Button } from '../Button'
import { Tag } from '../Tag'

import { RootReducer } from '../../store'
import { close, removeToCart } from '../../store/reducers/cart'
import { converToBrl, getTotalPrice } from '../../utils'

import * as S from './styles'

export const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleCloseCart = () => {
    dispatch(close())
  }

  const handleRemoveItem = (id: number) => {
    dispatch(removeToCart(id))
  }

  const goToCheckout = () => {
    navigate('/checkout'), handleCloseCart()
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
          Total de R$ {converToBrl(getTotalPrice(items))}{' '}
          <span>Em até 6x sem juros</span>
        </S.Prices>
        <Button
          onClick={() => goToCheckout()}
          to=""
          title="Clique aqui para continuar com a compra "
          type="button"
        >
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}
