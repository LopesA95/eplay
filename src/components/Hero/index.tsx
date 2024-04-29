import bannerImg from '../../assets/images/hogwartsfundo.png'
import { Button } from '../Button'
import { Tag } from '../Tag'
import { Banner, Infos } from './styles'

export const Hero = () => {
  return (
    <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <div>
          <Tag>RPG</Tag>
          <Tag>Ps5</Tag>
        </div>
        <Infos>
          <h2>Hogwarts Legacy</h2>
          <p>
            <span>De R$ 250,00 </span>
            Por R$ 190,00
          </p>
          <Button
            type="button"
            title="Clique aqui para adicionar ao carrinho"
            variant="primary"
          >
            Adicionar ao Carrinho
          </Button>
        </Infos>
      </div>
    </Banner>
  )
}
