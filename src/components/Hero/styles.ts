import styled from 'styled-components'
import { colors } from '../../styles/theme/theme'
import { TagContainer } from '../Tag/styles'
import { breakpoints } from '../../styles/global'

export const Banner = styled.div`
  display: block;
  width: 100%;
  height: 480px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  position: relative;

  padding-top: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    background-size: cover;
  }

  &::after {
    position: absolute;
    background-color: #000;
    opacity: 0.56;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`
export const Infos = styled.div`
  padding: 16px;
  background-color: ${colors.black};
  max-width: 290px;
  font-weight: bold;
  color: ${colors.white};

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;
    padding-bottom: 14px;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
