import  { Link } from 'react-router-dom';
import { useStore } from '../store';

export default function CategoryList() {
  const { categories } = useStore();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Categories</h2>
      <ul className="space-y-3">
        {categories.map(category => (
          <li key={category.id}>
            <Link 
              to={`/categories/${category.name}`}
              className="flex justify-between items-center p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              <span className="font-medium text-gray-700">{category.name}</span>
              <span className="bg-red-900 text-white px-2 py-1 rounded-full text-xs font-medium">
                {category.count}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
 