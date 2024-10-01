import { urlFor } from '@/lib/sanityClient';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

// Define the Host component props type
interface HostProps {
  name: string;
  email: string;
  bio?: string; // Optional bio
  website?: string; // Optional website
  profilePhoto?: {
    asset: {
      _ref: string;
    };
  };
}

const Host: React.FC<HostProps> = ({
  name,
  email,
  website,
  bio,
  profilePhoto,
}) => {
  return (
    <div className='sm:flex'>
      {profilePhoto && (
        <div className='mb-4 flex-shrink-0 sm:mb-0 sm:mr-4'>
          <Image
            src={urlFor(profilePhoto).width(100).url()}
            alt={`${name}'s profile photo`}
            width={100}
            height={100}
          />
        </div>
      )}

      <div>
        <h4 className='text-lg font-bold'>{name}</h4>
        <ReactMarkdown className='prose dark:prose-invert'>{bio}</ReactMarkdown>
        <a
          href={`mailto:${email}`}
          className='block text-sm text-blue-600 hover:underline'
        >
          {email}
        </a>
        <a
          href={website}
          className='block text-sm text-blue-600 hover:underline'
        >
          {website}
        </a>
      </div>
    </div>
  );
};

export default Host;
