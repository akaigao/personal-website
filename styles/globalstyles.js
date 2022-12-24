import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body, #__next {
    min-height: 100vh;
    max-width: 1440px;

    font-family: sans-serif;
    font-size: 16px;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
  }

  a {
    color: black;
  }
`

export const theme = {
  colors: {
    primary: '#0070f3'
  }
}
