'use server';

import client from '@/lib/sanityClient';

// Define TypeScript types for the data we expect
export interface Meeting {
  _id: string;
  title: string;
  description: string;
  masterEventId: string;
  host: {
    name: string;
    bio: string;
    email: string;
    website: string;
    profilePhoto?: {
      asset: {
        _ref: string;
      };
    };
  };
}

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
