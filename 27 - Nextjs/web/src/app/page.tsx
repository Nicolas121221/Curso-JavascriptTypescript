import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainContainer } from "@/components/MainContainer";
import HomePage from "@/containers/HomePage";
import { getAllPosts } from "@/data/posts/get-all-posts";
import { PostData } from "@/domain/posts/post";
import { JSX } from "react";

const Index = async (): Promise<JSX.Element> => {
  const posts: PostData[] = await getAllPosts("populate=cover&sort=id:desc");

  return (
    <main>
      <Header />
      <MainContainer>
        <HomePage posts={posts} />
      </MainContainer>
      <Footer />
    </main>
  );
};

export default Index;
