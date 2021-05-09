import client from '../client'
import groq from 'groq'
import { useNextSanityImage } from 'next-sanity-image';
import Layout from '@/components/Layout'
import Grid from '@/components/Gallery/GalleryGrid'
import Link from 'next/link'
import Card from '@/components/Gallery/Card'
import Image from '@/components/Gallery/Image'


const Galleri = ({result = []}) => {
    return (
      <Layout>
          <Grid>           
                {result.map(({_id, imageUrl, slug, title}) => (
                  <Link key={_id} href={{
                      pathname: '/galleri/[slug]',
                      query: { slug: `${slug.current}`}}} passHref>
                      <a><Card>
                        <Image {...useNextSanityImage(client, imageUrl)} height={500} width={350} objectFit="cover"/> 
                      </Card></a>
                    </Link>))}
          </Grid>
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