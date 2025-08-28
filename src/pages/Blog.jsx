import { useEffect, useState } from "react";
import BlogList from "../components/BlogList";
import matter from "front-matter"

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Dynamically import all markdown files in content/blog
    const files = import.meta.glob("../content/blog/*.md", { query: "?raw", import: "default" });

    Promise.all(
      Object.entries(files).map(async ([path, resolver]) => {
        const raw = await resolver();
        const { attributes } = matter(raw);
        // Extract slug from filename
        const slug = path
          .split("/")
          .pop()
          .replace(/\.md$/, "");
        return { ...attributes, slug };
      })
    ).then((allPosts) => {
      // Sort by date descending
      setPosts(
        allPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
      );
    });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Blog</h1>
      <BlogList posts={posts} />
    </div>
  );
}