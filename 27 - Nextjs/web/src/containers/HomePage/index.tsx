import { Header } from "@/components/Header";
import { PostData } from "@/domain/posts/post";
import { JSX } from "react";

export type HomeProps = {
  posts: PostData[];
};

const HomePage = ({ posts }: HomeProps): JSX.Element => {
  return (
    <>
      <Header />
      <section>
        {posts.map((post) => (
          <h2 key={post.slug}>{post.title}</h2>
        ))}
      </section>
    </>
  );
};
export default HomePage;
