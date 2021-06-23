import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
  --fontlogo: 'Oswald', sans-serif;
  --fontheading: 'Martel Sans', sans-serif;  /*'Tienne', serif;*/
  --fontbody: 'Martel Sans', sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body{
  
}
body {
  min-height: 100vh;
  overflow-x: hidden;
  font-family: var(--fontbody);
  justify-content: center;
  text-rendering: optimizeLegibility;
}

h1 {
  font-family: var(--fontheading);
  font-size: 2rem;
  @media(max-width: 576px) {
    font-size: 1.5rem;
  }
}

h2 {
  font-family: var(--fontheading);
  font-size: 2rem;
  font-weight: 200;
  @media(max-width: 576px) {
    font-size: 1.5rem;
  }
}

p {
  font-size: 1rem;
}

a {
  color: inherit;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

button {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

`;

function MyApp({ Component, pageProps }) {
  return ( 
    <>
    <GlobalStyle />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp

