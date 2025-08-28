import ThoughtsCard from "./ThoughtsCard";


export default function ThoughtsList({ posts }) {
  if (!posts.length) return <div>Loading...</div>;
  return (
    <div className="grid gap-6">
      {posts.map((post) => (
        <ThoughtsCard key={post.slug} post={post} />
      )).sort((a, b) => new Date(b.date) - new Date(a.date))}
    </div>
  );
}