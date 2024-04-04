import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  :root {
    font-size: clamp(40%, 1% + 2vw, 62.5%);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
  }

  body {
    font-family: ${({ theme }) => theme.FONTS.SECONDARY_FONT};
    font-size: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  input, textarea, button {
    font-family: ${({ theme }) => theme.FONTS.SECONDARY_FONT};
    font-size: 1.6rem;
  }

  input:focus {
    outline: none;
  }

  h1, h2, h3, h4, h5, h6, button {
    font-family: ${({ theme }) => theme.FONTS.PRIMARY_FONT};
  }

  a {
    text-decoration: none;
  }

  a, button {
    cursor: pointer;
  }

  button {
    border: none;
  }
`
