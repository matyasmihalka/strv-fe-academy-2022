import { createGlobalStyle } from 'styled-components'

import { colors } from './colors'
import { font } from './typography'
// font import missing

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
}

html, body, #__next {
    padding: 0;
    height: 100%;
}

html {
    font-size: 62.5%; // to have a default font size on 10px. % is needed to ensure, when someone changes the browser settings to larger text, then the fixly set value would be overwritten here
}

body {
    font-weight: 400;
    font-family: ${font.base};
    font-size: 1.6rem;  // Change back the fot size to 16px from the default 10px which we have set on the html element
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: always;
    background-color: ${colors.background.dimmed};
}

a {
    color: inherit;
    text-decoration: none;
}

#__next {
    /* display: flex; */
}
`
