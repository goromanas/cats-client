import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
  
  body {
    height: 100%;
    background: ${({ theme }) => theme.colors.geyser};
    color: ${({ theme }) => theme.colors.outerSpace};
    font-family: ${({ theme }) => theme.fonts.roboto}
  }
`
