import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-2xl">
        {/* 404 Number Animation */}
        <div className="relative">
          <h1 className="text-[180px] md:text-[240px] font-bold leading-none text-black">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[60px] md:text-[80px] font-bold text-white mix-blend-difference">
              404
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium"
          >
            <Home size={20} />
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors duration-300 font-medium"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Animation Element */}
        <div className="pt-8">
          <div className="inline-block animate-bounce">
            <div className="flex gap-1">
              <div className="w-2 h-8 bg-black rounded-full animate-pulse"></div>
              <div className="w-2 h-8 bg-black rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-8 bg-black rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
