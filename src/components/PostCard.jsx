import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <Link to={post.link}>
      <div className="border rounded-lg p-4 shadow hover:bg-bourbon-barrel hover:shadow-lg transition hover:scale-110">
        <h2 className="text-xl font-bold mb-2">
          {post.title}
        </h2>
        { post.date ? <p className="text-sm mb-2">{new Date(post.date).toDateString()}</p> : null }
        <p className="mb-2">{post.summary}</p>
      </div>
    </Link>
  );
}