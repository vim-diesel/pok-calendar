'use server';

import client from '@/lib/sanityClient';

export async function getMeetings(): Promise<Meeting[]> {
  const query = `*[_type == "meeting"] {
    _id,
    title,
    description,
    masterEventId,
    host-> {
      name,
      bio,
      email,
      website,
      profilePhoto
    }
  }`;

  // Fetch data from Sanity
  const meetings: Meeting[] = await client.fetch(query, undefined, { cache: 'no-store' });
  return meetings;
}
