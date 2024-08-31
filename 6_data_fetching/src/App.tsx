import { ReactNode, useEffect, useState } from "react";
import { get } from "./utils/http";
import BlogPosts, { BlogPost } from "./components/BlogPosts";

type RawDataType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};
function App() {
  const [posts, setPosts] = useState<BlogPost[]>();

  useEffect(() => {
    const fetchPosts = async () => {
      const data = (await get(
        "https://jsonplaceholder.typicode.com/posts"
      )) as RawDataType[];

      const blogPosts: BlogPost[] = data.map((el) => {
        return {
          id: el.id,
          title: el.title,
          text: el.body,
        };
      });
      setPosts(blogPosts);
    };
    fetchPosts();
  }, []);
  let content: ReactNode;
  if (posts) {
    content = <BlogPosts posts={posts} />;
  }

  return (
    <main>
      <h1>Data Fetching!</h1>
      {content}
    </main>
  );
}

export default App;
