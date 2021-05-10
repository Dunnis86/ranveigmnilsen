import { useRouter } from 'next/router';
import styled from 'styled-components'; 
import Link from 'next/link';
import client from '../../client.js';
import { useNextSanityImage } from 'next-sanity-image';
import groq from 'groq';
import Layout from '@/components/Layout.js';
import Container from '@/components/Gallery/ImageContainer.js';
import Image from '@/components/Gallery/IndividualImage.js';

const A = styled.a`
  display: block;
  margin: 0 2rem;
  cursor: pointer;
  font-family: var(--fontheading);
  font-size: 1.2rem;
  @media(max-width: 576px) {
    margin: 1rem 2rem;
  }

  :hover {
      color: grey;
  }
`;

const Div = styled.div`
  @media(min-width: 576px) {
    filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.2));
  }
`;

const Textcontainer = styled.div`
  margin: 1rem 0;
  @media(max-width: 576px) {
    margin: 1rem 2rem;
  }
`;

const Galleri = ({result = []}) => {
    const router = useRouter()
    const { slug } = router.query
    return (
      <Layout>
      <Link href='/galleri'><A>Tilbake</A></Link>
        {result.map(({_id, imageUrl, title, beskrivelse}) => (
                    <Container key={_id}>
                      <Div><Image {...useNextSanityImage(client, imageUrl)} height={500} width={350} objectFit="contain"/></Div>
                      <Textcontainer>
                        <p><b>Tittel:</b> {title}</p>
                        <p><b>Beskrivelse:</b> {beskrivelse}</p> 
                      </Textcontainer> 
                    </Container>))}
      </Layout>
    )
}

export async function getStaticPaths() {
    const query = groq`*[_type == "galleri"]{slug}`;
    const result = await client.fetch(query)
    const paths = result.map(child => 
      ({params: {slug: child.slug.current}}))
    return { 
      paths, fallback: false
    };
}


export async function getStaticProps ({params: {slug}}) {
    const query = groq`*[_type == "galleri" && slug.current == $slug]{ 
        _id,
        'title': title,
        'kunstner': author,
        'beskrivelse': description,
        'imageUrl': bilde }`;
    const result = await client.fetch(query, { slug })
    if (!result) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
  
    return {
      props: {
        result,
      }
    }
  }


export default Galleri;
