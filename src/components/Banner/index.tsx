import { Imagem, Precos, Title } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'

export const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Title>
      <Precos>
        De <span>R$ 250,00 </span>
        <br />
        por apoenas R$ 99,90
      </Precos>
    </div>
  </Imagem>
)
