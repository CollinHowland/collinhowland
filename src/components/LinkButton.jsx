import { Link } from "react-router-dom";

export default function LinkButton({ children, link }) {
  return (
    <Link 
        className="border rounded-lg p-4 shadow hover:bg-bourbon-barrel hover:shadow-lg transition" 
        to={link}
    >{children}</Link>
  );
}