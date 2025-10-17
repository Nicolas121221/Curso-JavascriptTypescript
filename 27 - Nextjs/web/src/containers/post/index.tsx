import { Cover } from "@/components/Cover";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Heading } from "@/components/Heading";
import { MainContainer } from "@/components/MainContainer";
import { PostContainer } from "@/components/PostContainer";
import { PostDetails } from "@/components/PostDetails";
import { PostData } from "@/domain/posts/post";
import { JSX } from "react";

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps): JSX.Element => {
  return (
    <>
      <Header />
      <MainContainer>
        <>
          <Heading>{post.title}</Heading>
          <Cover coverAttributes={post.cover} />
          <PostDetails
            author={post.author.name}
            category={post.category.name}
            date={post.createdAt}
          />
          <PostContainer content={post.content}/>
        </>
      </MainContainer>
      <Footer />
    </>
  );
};
