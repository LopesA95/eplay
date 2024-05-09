import { Link } from 'react-router-dom'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import carrinho from '../../assets/images/carrinho.svg'
import logo from '../../assets/images/logo.svg'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import {
  CartButton,
  Hamburger,
  HeaderBar,
  HeaderRow,
  LinkItem,
  Links,
  NavMobile
} from './styles'

export const Header = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleOpenCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburger>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link to="/categories">Categorias</Link>
              </LinkItem>
              <LinkItem>
                <a href="#">Novidades</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Promoções</a>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <CartButton onClick={handleOpenCart}>
          {items.length} <span>- produto(s)</span>
          <img src={carrinho} alt="carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}
