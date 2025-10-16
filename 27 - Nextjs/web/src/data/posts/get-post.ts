import { POSTS_URL } from "@/config/app-config";
import { ApiResponse, PostData } from "@/domain/posts/post";
import { fetchJson } from "@/utils/fetch-json";

export const getPost = async (slug: string | string[], query = ''): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;

  const url = `${POSTS_URL}?filters[slug][$eqi]=${slugString}&${query}`;
  const posts = await fetchJson<ApiResponse>(url);
  return posts.data;
};
