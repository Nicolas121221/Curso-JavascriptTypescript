import HomePage from "@/containers/HomePage";
import { getAllPosts } from "@/data/posts/get-all-posts";
import { PostData } from "@/domain/posts/post";
import { JSX } from "react";

const Index = async (): Promise<JSX.Element> => {
  const posts: PostData[] = await getAllPosts();

  return (
    <main>
      <HomePage posts={posts}/>
    </main>
  );
};

export default Index;
