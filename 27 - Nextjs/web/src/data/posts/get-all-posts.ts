import { POSTS_URL } from "@/config/app-config";
import { ApiResponse, PostData } from "@/domain/posts/post";
import { fetchJson } from "@/utils/fetch-json";

export const getAllPosts = async (): Promise<PostData[]> => {
  const posts = await fetchJson<ApiResponse>(POSTS_URL);
  return posts.data;
};
