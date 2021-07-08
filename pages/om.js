import client from '../client';
import groq from 'groq';
import Layout from '@/components/Layout.js';
import Container from'@/components/Container.js';
import styled from 'styled-components';
import {fadeIn} from '@/components/StyledComp/fadeIn';
import BlockContent from '@sanity/block-content-to-react';
import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url'

const urlFor = (source) => {
  return imageUrlBuilder(client).image(source)
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 1rem;
  justify-content: center;
  @media(max-width: 768px) {
    grid-template-columns: 1fr
  }
`;

const Wrapper = styled.div`
  @media(max-width: 576px) {
    padding: 0 2rem;
  }
`;

const Heading = styled.h2`
  margin: 0 0 1rem 0;
`;

const ImgHolder = styled.div`
  position: relative;
  height: 600px;
  @media(max-width: 1200px) {
    height: 500px;
  }
  @media(max-width: 768px) {
    height: 400px;
  }
  @media(max-width: 576px) {
    height: 300px;
  }
`;

const Img = styled(Image)`
  animation: ${fadeIn} 1s ease-out;
`;

const Blockholder = styled.div`
  animation: ${fadeIn} 1s ease-out;
`;

const Block = styled(BlockContent)`
  @media(max-width: 768px) {
    margin: 1rem 0 0 0;
  }
`;

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener('change', updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener('change', updateTarget);
  }, []);

  return targetReached;
};


export default function Home(props) {
  const { title, imageUrl, description = []} = props.data.result
  const isBreakpoint = useMediaQuery(768)
  return (
    <Layout title={'Ranveig M Nilsen - Om Ranveig'} description={'En kort beskrivelse av Ranveig M Nilsen'}>
      <Container>
      <Wrapper>
        <Grid>
          { isBreakpoint ? (
            <>
            <Blockholder>
              <Heading>{title}</Heading> 
              <ImgHolder><Img blurDataURL={urlFor(imageUrl).height(300).url()} src={urlFor(imageUrl).url()} layout="fill" objectFit="contain" placeholder="blur"/></ImgHolder>
              <Block blocks={description} {...client.config()}/>
            </Blockholder>
            </>
          ) : (
            <>
            <Blockholder>
              <Heading>{title}</Heading> 
              <Block blocks={description} {...client.config()}/>
            </Blockholder>
            <ImgHolder><Img blurDataURL={urlFor(imageUrl).height(300).url()} src={urlFor(imageUrl).url()} layout="fill" objectFit="contain" placeholder="blur"/></ImgHolder>
            </>
            )}
        </Grid>
        </Wrapper> 
      </Container>
    </Layout>
  )
}


export async function getStaticProps (context) {

  const query = groq`*[_type == "profile"][0]{ 
      'id': _id,
      'title': title,
      'imageUrl': bilde, 
      description}`;
  const result = await client.fetch(query)
  return {
    props: {
      data: {
        result
      },
    },
    }
  }
 