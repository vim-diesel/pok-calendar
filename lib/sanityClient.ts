import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Sanity client setup
const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || '', // Your Sanity project ID from .env
  dataset: 'production',                          // Dataset name, usually 'production'
  useCdn: false,                                  // Set false for server-side freshness
  apiVersion: '2023-10-01',                       // Use the latest API version or required version
  token: process.env.SANITY_API_TOKEN,            // Optional token for secured data fetching
});

// Helper to build image URLs
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export default client;
