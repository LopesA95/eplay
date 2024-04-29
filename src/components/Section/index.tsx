import { Container, TitleSection } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  children: JSX.Element
}

export const Section = ({ title, background, children }: Props) => (
  <Container background={background}>
    <div className="container">
      <TitleSection>{title}</TitleSection>
      {children}
    </div>
  </Container>
)
