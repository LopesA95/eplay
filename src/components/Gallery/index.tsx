import { Section } from '../Section'
import { Action, Item, Items, Modal, ModalContent } from './styles'

import spiderman from '../../assets/images/banner-homem-aranha.png'
import play from '../../assets/images/button_play.svg'
import close from '../../assets/images/close.svg'
import hogwarts from '../../assets/images/hogwartsfundo.png'
import zoom from '../../assets/images/maiszoom.svg'

export type GalleryItem = {
  type: 'video' | 'image'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: spiderman
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ?si=HbSBOsJXIbrwUEF1'
  }
]

export type Props = {
  defaultCover: string
  name: string
}

export const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="icone de fechar" />
          </header>
          <img src={spiderman} alt={name} />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}
