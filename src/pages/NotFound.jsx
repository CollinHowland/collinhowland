import { Link } from "react-router-dom";
import ContentContainer from "../components/ContentContainer";

export default function NotFound() {
  return (
    <ContentContainer>
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="mb-4">Page not found.</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Go Home
      </Link>
    </ContentContainer>
  );
}