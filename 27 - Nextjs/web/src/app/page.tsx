import { Header } from "@/components/Header";
import { MainContainer } from "@/components/MainContainer";
import HomePage from "@/containers/HomePage";
import { getAllPosts } from "@/data/posts/get-all-posts";
import { PostData } from "@/domain/posts/post";
import { JSX } from "react";

const Index = async (): Promise<JSX.Element> => {
  const posts: PostData[] = await getAllPosts();

  return (
    <main>
      <Header />
      <MainContainer>
        <HomePage posts={posts} />
      </MainContainer>
    </main>
  );
};

export default Index;
