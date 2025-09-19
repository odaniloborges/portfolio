import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin-top: 80px;
    font-family: 'Roboto', sans-serif;
    background-color: #f5f5f5;
    color: #3333;
  }
`

export default GlobalStyle

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  img {
    max-width: 100%;
    border-radius: 50%;
  }
`
