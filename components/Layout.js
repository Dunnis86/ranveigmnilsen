import styled from 'styled-components';
import Head from 'next/head';
import Navigation from './Navigation.js';

const Container = styled.div`
  margin: 0 0 2rem 0;
  padding: 0 2rem;
  @media(max-width: 576px){
        display: block;
        margin-bottom: 1rem;
        padding: 0
        } 
`; 


export default function Layout({children, title, description, imageUrl, keywords, author}) {
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
            <meta property="og:type" content="website" />
            <meta name="og:title" property="og:title" content={title} />
            <meta name="og:description" property="og:description" content={description} />
            <meta property="og:site_name" content="Ranveig M Nilsen" />
            <meta property="og:url" content="www.ranveigmnilsen.com" />  
            <meta property="og:image" content={imageUrl} />     
            <link rel="canonical" href="" />
        </Head>
            <Navigation/>
            <Container>
                {children}
            </Container>
        </>
    )
}

Layout.defaultProps = {
    title: 'Ranveig M Nilsen',
    description: 'Webgalleri med abstrakt kunst',
    imageUrl: "/meta_og.png",
    keywords: 'abstrakt, kunst, maling, maleri',
    author: 'Audun Nilsen'
  }
