import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-purple-200 text-center px-4">
      <div className="animate-fadeIn">
        <h1 className="text-[100px] font-extrabold text-purple-700">404</h1>
        <p className="text-3xl font-semibold text-gray-800">Page Not Found</p>
        <p className="text-gray-600 mt-2">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <div className="text-6xl mt-6">😢</div>
        <Link
          to="/"
          className="mt-8 inline-block bg-purple-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-purple-700 transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
