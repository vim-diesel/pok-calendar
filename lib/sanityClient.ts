import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Sanity client setup
// In Prod, we probably want to use the CDN. Or maybe once it gets hosted on Vercel
// it won't matter.
const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || '', 
  dataset: 'production',                          
  useCdn: false,                                  
  apiVersion: '2023-10-01',                       
  token: process.env.SANITY_API_TOKEN,            
});

// Helper to build image URLs
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export default client;
