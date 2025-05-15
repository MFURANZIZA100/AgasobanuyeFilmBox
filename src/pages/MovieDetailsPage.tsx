import  { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStore } from '../store';
import { Calendar, Clock, Tag, Play } from 'lucide-react';

export default function MovieDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { movies, isAuthenticated } = useStore();
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundMovie = movies.find(m => m.id === id);
      setMovie(foundMovie);
      setLoading(false);
    }
  }, [id, movies]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-900"></div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Movie Not Found</h2>
          <p className="text-gray-600 mb-6">The movie you are looking for does not exist.</p>
          <Link
            to="/"
            className="inline-block bg-red-900 hover:bg-red-800 text-white font-medium px-6 py-3 rounded-md"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-[500px]">
        <img 
          src={movie.poster} 
          alt={movie.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
            <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-1" />
                <span>{movie.year}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-1" />
                <span>{movie.duration} min</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-5 w-5 mr-1" />
                <span>{movie.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Synopsis</h2>
              <p className="text-gray-600 mb-8">{movie.description}</p>
              
              {isAuthenticated ? (
                <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-center h-72 bg-gray-800 rounded-lg">
                    <div className="text-center">
                      <Play className="h-16 w-16 text-red-900 mx-auto mb-4" />
                      <p className="text-white">Movie player would appear here for logged-in users</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 text-center">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Login to Watch</h3>
                  <p className="text-gray-600 mb-4">You need to be logged in to watch this movie.</p>
                  <Link
                    to="/login"
                    className="inline-block bg-red-900 hover:bg-red-800 text-white font-medium px-6 py-3 rounded-md"
                  >
                    Login Now
                  </Link>
                </div>
              )}
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Movie Info</h2>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Release Year:</span>
                  <span className="font-medium">{movie.year}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{movie.duration} minutes</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-medium">{movie.category}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Audio Language:</span>
                  <span className="font-medium">English</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Subtitles:</span>
                  <span className="font-medium">Kinyarwanda</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Share</h2>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="bg-blue-800 text-white p-2 rounded-full hover:bg-blue-900">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm3.6 7.2h-2.1c-.24 0-.57.33-.57.78v1.53h2.67v2.18H13.5v6.51H11.1v-6.51H9.3V9.51h1.8V8.16c0-1.77.93-3.36 3.03-3.36h2.37v2.4z" />
                  </svg>
                </a>
                <a href="#" className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-6h2v6zm4 0h-2v-6h2v6zm.75-10.5h-7.5L12 2l3.75 3.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 