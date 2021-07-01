import client from '../client';
import groq from 'groq';
import { useNextSanityImage } from 'next-sanity-image';
import Layout from '@/components/Layout.js';
import Grid from '@/components/Gallery/GalleryGrid.js';
import Link from 'next/link';
import Card from '@/components/Gallery/Card.js';
import Image from '@/components/Gallery/Image.js';
import Container from '@/components/Container.js';
import UserContext from '@/components/Scrollcontext'
import { useContext, useEffect } from 'react';


const Home = ({result = []}) => {

  const { scrollRef } = useContext(UserContext);

  useEffect(() => {
    //called when the component has been mounted, sets the scroll to the currently stored scroll position
    window.scrollTo(0, scrollRef.current.scrollPos);

    const handleScrollPos = () => {
      //every time the window is scrolled, update the reference. This will not cause a re-render, meaning smooth uninterrupted scrolling.
      scrollRef.current.scrollPos = window.scrollY
    };

    window.addEventListener('scroll', handleScrollPos);

    return () => {
      //remove event listener on unmount
      window.removeEventListener('scroll', handleScrollPos);
    };
    });

    return (
      <Layout title='Ranveig M Nilsen - Hjem'>
        <Container>
            <Grid>           
                {result.map(({_id, imageUrl, slug, title}) => (
                  <Link scroll={false} key={_id} href={{
                      pathname: '/galleri/[slug]',
                      query: { slug: `${slug.current}`}}} passHref>
                      <a><Card>
                        <Image {...useNextSanityImage(client, imageUrl)} height={500} width={350} objectFit="cover" alt={`Bilde av ${title}`} placeholder="blur"/> 
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




