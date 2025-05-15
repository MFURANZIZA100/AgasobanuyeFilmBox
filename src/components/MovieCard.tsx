import  { Link } from 'react-router-dom';
import { Movie } from '../types';
import { Clock, Calendar } from 'lucide-react';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <Link to={`/movies/${movie.id}`}>
        <div className="relative h-64 w-full">
          <img 
            src={movie.poster} 
            alt={movie.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
            <h3 className="text-white text-lg font-bold">{movie.title}</h3>
            <div className="flex items-center text-gray-300 text-sm mt-1">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="mr-3">{movie.year}</span>
              <Clock className="h-4 w-4 mr-1" />
              <span>{movie.duration} min</span>
            </div>
            <span className="inline-block px-2 py-1 bg-red-900 text-white text-xs rounded mt-2">
              {movie.category}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
 