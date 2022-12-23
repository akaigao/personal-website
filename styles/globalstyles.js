import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    font-size: 16px;
  }
`

export const theme = {
  colors: {
    primary: '#0070f3'
  }
}
