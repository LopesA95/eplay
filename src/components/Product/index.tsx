import { Tag } from '../Tag'
import { Card, CardTitle, Description, Infos } from './styles'

export type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

export const Product = ({
  category,
  description,
  image,
  title,
  infos,
  system
}: Props) => (
  <div>
    <Card className="container">
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <CardTitle>{title}</CardTitle>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Description>{description}</Description>
    </Card>
  </div>
)
