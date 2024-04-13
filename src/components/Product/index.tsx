import { Tag } from '../Tag'
import { Card, CardTitle, Descrition } from './styles'

export const Product = () => (
  <div>
    <Card className="container">
      <img src="//placehold.it/222x250" alt="" />
      <CardTitle>Nome do jogo</CardTitle>
      <Tag>Categoria</Tag>
      <Tag>Windows</Tag>
      <Descrition>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum nam,
        corrupti cumque dolor fuga, voluptatibus earum temporibus illo, ducimus
        iusto atque natus animi. Minima et inventore alias a aliquam maxime.
      </Descrition>
    </Card>
  </div>
)
