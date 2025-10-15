import { PostCard } from "@/components/PostCard";
import { PostData } from "@/domain/posts/post";
import { JSX } from "react";

export type HomeProps = {
  posts: PostData[];
};

const HomePage = ({ posts }: HomeProps): JSX.Element => {
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {posts.map((post) => (
          <PostCard
            key={post.title}
            slug={post.slug}
            title={post.title}
            cover={post.cover.formats.small.url}
          />
        ))}
      </section>
    </>
  );
};
export default HomePage;
