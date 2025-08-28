import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import fm from "front-matter";
import ReactMarkdown from "react-markdown";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // Dynamically import the markdown file for the given slug
    const file = import.meta.glob("../content/blog/*.md", { query: "?raw", import: "default" });
    const path = `../content/blog/${slug}.md`;

    if (file[path]) {
      file[path]().then((raw) => {
        const { attributes, body } = fm(raw);
        setPost({ ...attributes, body });
      });
    } else {
      setNotFound(true);
    }
  }, [slug]);

  if (notFound) {
    return (
      <div className="p-8">
        <p>Post not found.</p>
        <Link to="/blog" className="text-blue-600 hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  if (!post) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-4">{post.date}</p>
      <ReactMarkdown>{post.body}</ReactMarkdown>
      <Link to="/blog" className="text-blue-600 hover:underline block mt-8">
        ← Back to Blog
      </Link>
    </div>
  );
}