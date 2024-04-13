import { Banner } from '../../components/Banner'
import { ProductsList } from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starwars from '../../assets/images/star_wars.png'
import streetFigther from '../../assets/images/streetFighter.png'

import { Game } from '../../models/Game'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',

    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250'],
    image: resident
  },

  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',

    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['5%', 'R$ 290'],
    image: resident
  },

  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',

    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250'],
    image: resident
  },

  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',

    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',

    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',

    title: 'Star Wars',
    system: 'Windows',
    infos: ['17/05'],
    image: starwars
  },
  {
    id: 7,
    category: 'Luta',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',

    title: 'Street Fighter 6',
    system: 'Windows',
    infos: ['17/05'],
    image: streetFigther
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™..',

    title: 'Zelda',
    system: 'Switch',
    infos: ['17/05'],
    image: zelda
  }
]

export const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)
