import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

export type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
};

export const PostCard = ({ slug, title, cover }: PostCardProps): JSX.Element => {
  return (
    <article className="duration-150 hover:opacity-80">
      <Link href="/posts/[slug]" as={`/post/${slug}`}>
        <Image src={cover} alt={title} className="mb-5" width="600" height={100} />
      </Link>
      <Link href="/posts/[slug]" as={`/post/${slug}`}>
        <h2 className="text-lg text-blue-200 ">{title}</h2>
      </Link>
    </article>
  );
};
