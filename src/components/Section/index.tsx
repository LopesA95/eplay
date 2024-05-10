import * as S from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  children: JSX.Element
}

export const Section = ({ title, background, children }: Props) => (
  <S.Container background={background}>
    <div className="container">
      <S.TitleSection>{title}</S.TitleSection>
      {children}
    </div>
  </S.Container>
)
