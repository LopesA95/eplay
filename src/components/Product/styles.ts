import styled from 'styled-components'
import { colors } from '../../styles/theme/theme'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.gray};
  border-radius: 8px;
  padding: 8px;
  position: relative;
  height: 450px;

  img {
    display: block;
    width: 100%;
    height: 240px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const CardTitle = styled.h3`
  font-weight: bold;
  font-size: 16px;

  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;

  display: block;
  margin-top: 16px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
