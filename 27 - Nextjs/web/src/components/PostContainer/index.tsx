import { JSX } from "react";
import "./styles.css";

export type PostContainerProps = {
  content: string;
};

export const PostContainer = ({ content }: PostContainerProps): JSX.Element => {
  return (
    <article className="post-container">
      <section dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
};
