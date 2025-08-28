import { useEffect, useState } from "react";
import ThoughtsList from "../components/ThoughtsList";
import Title from "../components/Title";
import matter from "front-matter"
import ContentContainer from "../components/ContentContainer";

export default function Thoughts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Dynamically import all markdown files in content/thoughts
    const files = import.meta.glob("../content/thoughts/*.md", { query: "?raw", import: "default" });

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
    <ContentContainer>
      {/* <h1 className="text-2xl font-bold mb-6">Thoughts</h1> */}
      <Title>Thoughts</Title>
      <ThoughtsList posts={posts} />
    </ContentContainer>
  );
}