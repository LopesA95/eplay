import { Imagem, Precos, Title } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import { Tag } from '../Tag'
import { Button } from '../Button'

export const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Title>
        <Precos>
          De <span>R$ 250,00 </span>
          <br />
          por apoenas R$ 99,90
        </Precos>
      </div>
      <Button
        type="link"
        to="/produtos"
        title="Clique aqui para aproveitar esta oferta"
      >
        Aproveitar
      </Button>
    </div>
  </Imagem>
)
