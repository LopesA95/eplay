import { createGlobalStyle } from 'styled-components'
import { Colors } from './theme/theme'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${Colors.black};
    color: ${Colors.white};
  }
`
