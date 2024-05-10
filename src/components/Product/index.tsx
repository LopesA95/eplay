import { Tag } from '../Tag'
import * as S from './styles'

export type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

export const Product = ({
  category,
  description,
  image,
  title,
  infos,
  system,
  id
}: Props) => {
  const getDesciption = (text: string) => {
    if (text.length > 80) {
      return text.slice(0, 77) + '...'
    }
    return text
  }

  return (
    <div>
      <S.Card
        title={`Clique aqui para ver mais detalhes do jogo: ${title}`}
        to={`/product/${id}`}
      >
        <img src={image} alt={title} />
        <S.Infos>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </S.Infos>
        <S.CardTitle>{title}</S.CardTitle>
        <Tag>{category}</Tag>
        <Tag>{system}</Tag>
        <S.Description>{getDesciption(description)}</S.Description>
      </S.Card>
    </div>
  )
}
