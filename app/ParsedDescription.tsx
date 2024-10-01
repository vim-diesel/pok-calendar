import parse from 'html-react-parser';

export const ParsedDescription = ({
  description,
}: {
  description: string | null | undefined;
}) => {
  if (!description) {
    return <div></div>;
  }
  return <article className='prose prose-a:text-blue-600 prose-ul:list-none prose-ul:list-outside prose-ul:m-0 prose-li:m-0 max-w-none'>{parse(description)}</article>;
};
