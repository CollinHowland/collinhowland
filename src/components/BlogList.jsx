import BlogCard from "./BlogCard";


export default function BlogList({ posts }) {
  if (!posts.length) return <div>Loading...</div>;
  return (
    <div className="grid gap-6">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      )).sort((a, b) => new Date(b.date) - new Date(a.date))}
    </div>
  );
}