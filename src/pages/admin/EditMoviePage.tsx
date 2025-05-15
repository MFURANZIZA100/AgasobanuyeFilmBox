import  { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../../store';
import { Film, Calendar, Clock, Tag, Upload, Video } from 'lucide-react';

export default function EditMoviePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { movies, updateMovie } = useStore();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [year, setYear] = useState('');
  const [duration, setDuration] = useState('');
  const [poster, setPoster] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const movie = movies.find(m => m.id === id);
      if (movie) {
        setTitle(movie.title);
        setDescription(movie.description);
        setCategory(movie.category);
        setYear(movie.year);
        setDuration(movie.duration);
        setPoster(movie.poster);
        setVideoUrl(movie.videoUrl);
      }
      setLoading(false);
    }
  }, [id, movies]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!title) newErrors.title = 'Title is required';
    if (!description) newErrors.description = 'Description is required';
    if (!category) newErrors.category = 'Category is required';
    if (!year) newErrors.year = 'Year is required';
    if (!duration) newErrors.duration = 'Duration is required';
    if (!poster) newErrors.poster = 'Poster URL is required';
    if (!videoUrl) newErrors.videoUrl = 'Video URL is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate() && id) {
      updateMovie(id, {
        title,
        description,
        category,
        year,
        duration,
        poster,
        videoUrl
      });
      
      navigate('/admin');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-2xl font-bold text-gray-900">Edit Movie</h1>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Movie Title
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                    <Film className="h-5 w-5" />
                  </span>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-red-900 focus:border-red-900"
                  />
                </div>
                {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="description"
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-900 focus:border-red-900"
                  />
                </div>
                {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                    <Tag className="h-5 w-5" />
                  </span>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-red-900 focus:border-red-900"
                  >
                    <option value="">Select a category</option>
                    <option value="Action">Action</option>
                    <option value="Drama">Drama</option>
                    <option value="Horror">Horror</option>
                    <option value="Romantic">Romantic</option>
                    <option value="Indian">Indian</option>
                    <option value="Documentaries">Documentaries</option>
                    <option value="Cartoon">Cartoon</option>
                    <option value="By Yanga">By Yanga</option>
                  </select>
                </div>
                {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
              </div>
              
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                  Year
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                    <Calendar className="h-5 w-5" />
                  </span>
                  <input
                    type="number"
                    id="year"
                    min="1900"
                    max={new Date().getFullYear()}
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-red-900 focus:border-red-900"
                  />
                </div>
                {errors.year && <p className="mt-1 text-sm text-red-600">{errors.year}</p>}
              </div>
              
              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                  Duration (minutes)
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                    <Clock className="h-5 w-5" />
                  </span>
                  <input
                    type="number"
                    id="duration"
                    min="1"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-red-900 focus:border-red-900"
                  />
                </div>
                {errors.duration && <p className="mt-1 text-sm text-red-600">{errors.duration}</p>}
              </div>
              
              <div>
                <label htmlFor="poster" className="block text-sm font-medium text-gray-700">
                  Poster URL
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                    <Upload className="h-5 w-5" />
                  </span>
                  <input
                    type="text"
                    id="poster"
                    value={poster}
                    onChange={(e) => setPoster(e.target.value)}
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-red-900 focus:border-red-900"
                  />
                </div>
                {errors.poster && <p className="mt-1 text-sm text-red-600">{errors.poster}</p>}
                {poster && (
                  <div className="mt-2 h-32 w-24 rounded overflow-hidden">
                    <img src={poster} alt="Poster preview" className="h-full w-full object-cover" />
                  </div>
                )}
              </div>
              
              <div>
                <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-700">
                  Video URL
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                    <Video className="h-5 w-5" />
                  </span>
                  <input
                    type="text"
                    id="videoUrl"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-red-900 focus:border-red-900"
                  />
                </div>
                {errors.videoUrl && <p className="mt-1 text-sm text-red-600">{errors.videoUrl}</p>}
              </div>
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => navigate('/admin')}
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-red-900 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-900"
              >
                Update Movie
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
 