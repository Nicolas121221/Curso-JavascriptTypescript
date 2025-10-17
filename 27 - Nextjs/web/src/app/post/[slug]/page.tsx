import { Post } from "@/containers/post";
import { getPost } from "@/data/posts/get-post";
import { JSX } from "react";

const DynamicPost = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<JSX.Element> => {
  const { slug } = await params;
  const post = await getPost(slug, "populate=*");

  return <Post post={post} />;
};

export default DynamicPost;
