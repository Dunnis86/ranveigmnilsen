import sanityClient from '@sanity/client'

export default sanityClient({  
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-04-21',
  useCdn: true, // `false` if you want to ensure fresh data
  
});
