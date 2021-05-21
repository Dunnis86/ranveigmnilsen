import { useRouter } from 'next/router';
import styled from 'styled-components'; 
import Link from 'next/link';
import client from '../../client.js';
import { useNextSanityImage } from 'next-sanity-image';
import groq from 'groq';
import Layout from '@/components/Layout.js';
import Container from '@/components/Gallery/ImageContainer.js';
import Image from '@/components/Gallery/IndividualImage.js';
import BackArrow from '@/components/Arrow.js';

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
    filter: drop-shadow(0 10px 7px rgba(0, 0, 0, 0.3));
    margin: 1rem;
`;

const Textcontainer = styled.div`
  margin: 1rem 0;
  @media(max-width: 576px) {
    margin: 1rem 2rem;
  }
`;

const Galleri = (props) => {
    const { _id, imageUrl, title, beskrivelse, url } = props.data.result
    const router = useRouter()
    const { slug } = router.query
    return (
      <Layout title={`Ranveig M Nilsen - ${title}`} description={beskrivelse} image={url}>
      <Link href='/'><a><BackArrow/></a></Link>
        <Container key={_id}>
          <Div><Image {...useNextSanityImage(client, imageUrl)} height={500} width={350} objectFit="contain"/></Div>
          <Textcontainer>
            <p><b>Tittel:</b> {title}</p>
            <p><b>Beskrivelse:</b> {beskrivelse}</p> 
          </Textcontainer> 
        </Container>
      </Layout>
    )
}

export async function getStaticPaths() {
    const query = groq`*[_type == "galleri" && defined(slug.current)][].slug.current`;
    const result = await client.fetch(query)
    const paths = result.map(slug => 
      ({params: {slug}}))
    return { 
      paths: paths, 
      fallback: false
    };
}


export async function getStaticProps ({params}) {

    const query = groq`*[_type == "galleri" && slug.current == $slug][0]{ 
        _id,
        'title': title,
        'kunstner': author,
        'beskrivelse': description,
        'imageUrl': bilde,
        'url': bilde.asset->url}`;
    const result = await client.fetch(query, { slug: params.slug })
    return {
      props: {
        data: {
          result
        },
      },
      }
    }
  


export default Galleri;
