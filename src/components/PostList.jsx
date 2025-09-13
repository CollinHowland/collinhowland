import PostCard from "./PostCard";


export default function PostList({ posts }) {
  if (!posts.length) return <div>Loading...</div>;
  return (
    <div className="grid gap-6">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}