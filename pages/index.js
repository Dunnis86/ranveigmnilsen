import client from '../client';
import groq from 'groq';
import { useNextSanityImage } from 'next-sanity-image';
import Layout from '@/components/Layout.js';
import Grid from '@/components/Gallery/GalleryGrid.js';
import Link from 'next/link';
import Card from '@/components/Gallery/Card.js';
import Image from '@/components/Gallery/Image.js';
import Container from '@/components/Container.js';


const Home = ({result = []}) => {
    return (
      <Layout title='Ranveig M Nilsen - Hjem'>
        <Container>
            <Grid>           
                {result.map(({_id, imageUrl, slug, title}) => (
                  <Link key={_id} href={{
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




