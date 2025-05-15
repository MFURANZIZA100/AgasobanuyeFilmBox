import  Hero from '../components/Hero';
import MovieGrid from '../components/MovieGrid';
import CategoryList from '../components/CategoryList';

export default function HomePage() {
  return (
    <div>
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <CategoryList />
          </div>
          
          <div className="lg:col-span-3">
            <div id="movies" className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Movies</h2>
              <MovieGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 