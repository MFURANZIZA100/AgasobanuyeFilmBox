import  { useParams } from 'react-router-dom';
import MovieGrid from '../components/MovieGrid';
import CategoryList from '../components/CategoryList';

export default function CategoryPage() {
  const { name } = useParams<{ name: string }>();
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <CategoryList />
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{name} Movies</h1>
              <p className="text-gray-600">Browse our collection of {name?.toLowerCase()} movies</p>
            </div>
            
            <MovieGrid category={name} />
          </div>
        </div>
      </div>
    </div>
  );
}
 