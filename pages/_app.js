import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
  --fontlogo: 'Oswald', sans-serif;
  --fontheading: 'Tienne', serif;
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
}

`;

function MyApp({ Component, pageProps, title, description, keywords, author }) {
  return ( 
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Martel+Sans:wght@300;400&family=Oswald:wght@300;400;500;700&family=Tienne:wght@400;700&display=swap" rel="stylesheet"/>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name='description' content={description}/>
      <meta name='keywords' content={keywords}/>
      <meta name='author' content={author}/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
    </>
  )
}

MyApp.defaultProps = {
  title: 'Ranveig M Nilsen',
  description: 'Webgalleri med abstrakt kunst',
  keywords: 'abstrakt, kunst, maling, maleri',
  author: 'Audun Nilsen'
}


export default MyApp

