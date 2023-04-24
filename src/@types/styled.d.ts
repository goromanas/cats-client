import 'styled-components'

declare module 'styled-components' {
  export interface DefaultColors {
    outerSpace: string
    geyser: string
    roseBud: string
    white: string
    salmon: string
    nevada: string
    alto: string
    submarine: string
  }

  export interface DefaultFonts {
    roboto: string
  }

  export interface DefaultTheme {
    colors: DefaultColors
    fonts: DefaultFonts
  }
}
