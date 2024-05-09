import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

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
                <Link
                  title="Clique aqui para acessar a seção de categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </LinkItem>
              <LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de em breve"
                  to="/#coming-soon"
                >
                  Em Breve
                </HashLink>
              </LinkItem>
              <LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
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
            <Link
              title="Clique aqui para acesar a pagina de categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </LinkItem>
          <LinkItem>
            <HashLink
              title="Clique aqui para acessar a seção de em breve"
              to="/#coming-soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Em breve
            </HashLink>
          </LinkItem>
          <LinkItem>
            <HashLink
              title="Clique aqui para acessar a seção de promoções"
              to="/#on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}
