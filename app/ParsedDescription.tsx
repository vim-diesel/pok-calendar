import parse from 'html-react-parser';

export const ParsedDescription = ({ description }: { description: string | null | undefined }) => {
  if (!description) {
    return <div></div>;
  }
  return <div>{parse(description)}</div>;
};