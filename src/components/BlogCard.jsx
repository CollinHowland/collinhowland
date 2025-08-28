import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className="text-gray-500 text-sm mb-2">{post.date}</p>
      <p className="mb-2">{post.summary}</p>
      <Link to={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
        Read more &rarr;
      </Link>
    </div>
  );
}