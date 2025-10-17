import { PostCover } from "@/domain/posts/post";
import Image from "next/image";
import { JSX } from "react";

type CoverProps = {
  coverAttributes: PostCover
};

export const Cover = ({ coverAttributes }: CoverProps): JSX.Element => {
  return (
    <Image
      className="w-full m-5"
      src={coverAttributes.formats.small.url}
      alt={coverAttributes.name}
      width={coverAttributes.formats.small.width}
      height={coverAttributes.formats.small.height}
    />
  );
};
