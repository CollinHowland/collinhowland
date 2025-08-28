import BlogCard from "./BlogCard";

// Example static data; replace with dynamic import or fetch later
// const posts = [
//   {
//     slug: "my-first-post",
//     title: "My First Post",
//     date: "2025-08-27",
//     summary: "A short summary of my first post.",
//   },
//   {
//     slug: "another-post",
//     title: "Another Post",
//     date: "2025-08-26",
//     summary: "A quick look at another topic.",
//   },
// ];

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