import { getPost } from "@/data/posts/get-post";
import { JSX } from "react";

const Post = async ({ params }: { params: Promise<{ slug: string }> }): Promise<JSX.Element> => {
  const { slug } = await params;
  const posts = await getPost(slug, "populate=cover");

  return (
    <div>
      {posts[0].title}
    </div>
  );
};

export default Post;
