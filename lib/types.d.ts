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
