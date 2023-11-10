'use client'

import { createGlobalStyle } from 'styled-components'

import theme from './theme'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 20px;
  }

  body {
    overflow-x: hidden !important;

    display: flex;
    flex-direction: column;
    min-width: 100vw;
    min-height: 100vh;

    background: ${theme.colors.background};

    color: ${theme.colors.text};
    font-size: 1em;
    font-weight: 400;
  }

  ul {
    list-style: none;
  }

  a, 
  button {
    font-family: var(--font-primary);
  }
`

export default GlobalStyles
