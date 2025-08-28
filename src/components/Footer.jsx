export default function Footer() {
  return (
    <footer className="text-center p-4 bg-gray-100 text-gray-600 mt-8">
      © {new Date().getFullYear()} Collin Howland. All rights reserved.
    </footer>
  );
}