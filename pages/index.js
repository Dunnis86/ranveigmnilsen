import client from '../client';
import groq from 'groq';
import Layout from '@/components/Layout.js';
import Grid from '@/components/Gallery/GalleryGrid.js';
import Link from 'next/link';
import Card from '@/components/Gallery/Card.js';
import Image from '@/components/Gallery/Image.js';
import Container from '@/components/Container.js';
import UserContext from '@/components/Scrollcontext';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import imageUrlBuilder from '@sanity/image-url'
import styled from 'styled-components'

const urlFor = (source) => {
  return imageUrlBuilder(client).image(source)
}

const ImageHolder = styled.div`
  position: relative;
  height: 500px;
`;

const Home = ({result = []}) => {
  const { scrollRef } = useContext(UserContext);
  const router = useRouter()
  
  const handleScrollPos = (url) => {
    //every time the window is scrolled, update the reference. This will not cause a re-render, meaning smooth uninterrupted scrolling.
    scrollRef.current.scrollPos = window.scrollY
  };
  useEffect(() => {
    window.scrollTo(0, scrollRef.current.scrollPos);}, []);

  useEffect(() => {
    router.events.on('routeChangeStart', handleScrollPos)
    return () => {
      router.events.off('routeChangeStart', handleScrollPos)
    }
  }, [router.asPath])

    return (
      <Layout title='Ranveig M Nilsen - Hjem'>
        <Container>
            <Grid>           
                {result.map(({_id, imageUrl, slug, title}) => (
                  <Link key={_id} href={{
                      pathname: '/galleri/[slug]',
                      query: { slug: `${slug.current}`}}} passHref>
                      <a><Card>
                        <ImageHolder>
                          <Image blurDataURL={urlFor(imageUrl).height(300).url()} src={urlFor(imageUrl).url()} layout="fill" objectFit="cover" placeholder="blur" alt={`Bilde av ${title}`} placeholder="blur" />
                        </ImageHolder> 
                        <div><p>{title}</p></div>
                      </Card></a>
                    </Link>))}
            </Grid>
          </Container>
      </Layout>
    )
}


export async function getStaticProps (context) {
  const query = groq`*[_type == "galleri"]{ 
      _id,
      'title': title,
      'slug': slug,
      'author': author,
      'beskrivelse': description,
      'imageUrl': bilde }`;

  const result = await client.fetch(query)

  return {
    props: {
      result 
    },
    revalidate: 600, 
  }
}

  
export default Home;




