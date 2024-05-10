import { PacmanLoader } from 'react-spinners'
import { colors } from '../../styles/theme/theme'
import { Container } from './styles'

export const Loader = () => {
  return (
    <Container>
      <PacmanLoader color={colors.white} />
    </Container>
  )
}
