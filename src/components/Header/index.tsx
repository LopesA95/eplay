import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import carrinho from '../../assets/images/carrinho.svg'
import logo from '../../assets/images/logo.svg'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import * as S from './styles'

export const Header = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleOpenCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburger>
          <Link to="/">
            <h1>
              <img src={logo} alt="EPLAY" />
            </h1>
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link
                  title="Clique aqui para acessar a seção de categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de em breve"
                  to="/#coming-soon"
                >
                  Em Breve
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton role="button" onClick={handleOpenCart}>
          {items.length} <span>- produto(s)</span>
          <img src={carrinho} alt="carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link
              title="Clique aqui para acesar a pagina de categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Clique aqui para acessar a seção de em breve"
              to="/#coming-soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Em breve
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Clique aqui para acessar a seção de promoções"
              to="/#on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}
