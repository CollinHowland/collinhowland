import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import fm from "front-matter";
import ReactMarkdown from "react-markdown";
import ContentContainer from "../components/ContentContainer";
import LinkButton from "../components/LinkButton";
import { useNavigate } from "react-router-dom";


export default function ThoughtsPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Dynamically import the markdown file for the given slug
    const file = import.meta.glob("../content/thoughts/*.md", { query: "?raw", import: "default" });
    const path = `../content/thoughts/${slug}.md`;

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
    navigate("/not-found");
  }

  if (!post) return <div className="p-8">Loading...</div>;

  return (
    <ContentContainer>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-4">{new Date(post.date).toDateString()}</p>
      <div className="mb-8">
        {post.body}
      </div>
      <LinkButton link="/thoughts">
        ← Back to Thoughts
      </LinkButton>
    </ContentContainer>
  );
}