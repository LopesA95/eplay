import styled from 'styled-components'
import { breakpoints } from '../../styles/global'
import { colors } from '../../styles/theme/theme'

export const HeaderBar = styled.header`
  background-color: ${colors.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${colors.white};
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`
export const LinkItem = styled.li`
  margin-right: 16px;
`
export const CartButton = styled.a`
  display: flex;
  cursor: pointer;
  img {
    margin-left: 16px;
  }
`
