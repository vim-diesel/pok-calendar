import parse from "html-react-parser";

export const ParsedDescription = ({
  description,
}: {
  description: string | null | undefined;
}) => {
  if (!description) {
    return <div></div>;
  }
  return (
    <article className="prose max-w-none dark:prose-invert prose-a:text-blue-600 prose-ul:m-0 prose-ul:list-outside prose-ul:list-none prose-li:m-0 dark:prose-a:text-blue-400">
      {parse(description)}
    </article>
  );
};
