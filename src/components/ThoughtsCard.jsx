import { Link } from "react-router-dom";

export default function ThoughtsCard({ post }) {
  return (
    <Link to={`/thoughts/${post.slug}`}>
      <div className="border rounded-lg p-4 shadow hover:bg-bourbon-barrel hover:shadow-lg transition">
        <h2 className="text-xl font-bold mb-2">
          {post.title}
        </h2>
        <p className="text-sm mb-2">{post.date}</p>
        <p className="mb-2">{post.summary}</p>
      </div>
    </Link>
  );
}