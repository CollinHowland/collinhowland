import { useParams, Link } from "react-router-dom";

// Example static data; replace with dynamic import or fetch later
const posts = [
  {
    slug: "my-first-post",
    title: "My First Post",
    date: "2025-08-27",
    content: "This is the content of my first blog post!",
  },
  {
    slug: "another-post",
    title: "Another Post",
    date: "2025-08-26",
    content: "Here is some more content for another post.",
  },
];

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="p-8">
        <p>Post not found.</p>
        <Link to="/blog" className="text-blue-600 hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-4">{post.date}</p>
      <div className="mb-8">{post.content}</div>
      <Link to="/blog" className="text-blue-600 hover:underline">← Back to Blog</Link>
    </div>
  );
}