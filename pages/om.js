import client from '../client';
import groq from 'groq';
import Layout from '@/components/Layout.js';
import Container from'@/components/Container.js';
import { useNextSanityImage } from 'next-sanity-image';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react'
import Image from 'next/image';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  grid-template-rows: auto;
  grid-gap: 2rem;
  justify-content: center;
  @media(max-width: 576px) {
    grid-template-columns: 1fr
  }
`;

const Wrapper = styled.div`
  @media(max-width: 576px) {
    padding: 0 2rem;
  }
`;

const Heading = styled.h2`
  margin: 0 0 2rem 0;
  @media(max-width: 576px) {
    margin: 0 0 1rem 0;
  }
`;

const Img = styled(Image)`
  @media(min-width: 576px) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const Block = styled(BlockContent)`
  @media(min-width: 576px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
  }
`;


export default function Home(props) {
  const { title, imageUrl, description = []} = props.data.result
  return (
    <Layout title={'Ranveig M Nilsen - Om Ranveig'} description={'En kort beskrivelse av Ranveig M Nilsen'}>
      <Container>
      <Wrapper>
        <Heading>{title}</Heading>   
        <Grid>
          <Img {...useNextSanityImage(client, imageUrl)} height={800} width={600} objectFit='cover'/>
          <Block blocks={description} {...client.config()}/>
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
 