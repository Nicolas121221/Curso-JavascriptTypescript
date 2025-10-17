import { JSX } from "react";
import { Date } from "../Date";

export type PostDetailProps = {
  date: string;
  author: string;
  category: string;
};

export const PostDetails = ({ date, author, category }: PostDetailProps): JSX.Element => {
  return (<section className="max-w-full text-sm m-5 italic">Created by {author} | <Date date={date} /> in {category}</section>
  );
};
