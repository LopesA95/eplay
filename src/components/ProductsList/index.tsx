import { Product } from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

export const ProductsList = ({ background, title }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product />
        <Product />
        <Product />
        <Product />
      </List>
    </div>
  </Container>
)
