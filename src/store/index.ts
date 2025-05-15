import  { create } from 'zustand';
import { movies as initialMovies, categories } from '../data/movies';
import { users } from '../data/users';
import { Movie, User, Category } from '../types';

type State = {
  movies: Movie[];
  categories: Category[];
  users: User[];
  currentUser: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  addMovie: (movie: Omit<Movie, 'id'>) => void;
  updateMovie: (id: string, movie: Partial<Movie>) => void;
  deleteMovie: (id: string) => void;
  filterMoviesByCategory: (category: string) => Movie[];
};

export const useStore = create<State>((set, get) => ({
  movies: initialMovies,
  categories,
  users,
  currentUser: null,
  isAuthenticated: false,

  login: (email, password) => {
    const user = get().users.find(u => u.email === email && u.password === password);
    if (user) {
      set({ currentUser: user, isAuthenticated: true });
      return true;
    }
    return false;
  },

  logout: () => {
    set({ currentUser: null, isAuthenticated: false });
  },

  addMovie: (movie) => {
    const newMovie = {
      ...movie,
      id: Math.random().toString(36).substring(2, 9)
    };
    set(state => ({ movies: [...state.movies, newMovie] }));
  },

  updateMovie: (id, updatedMovie) => {
    set(state => ({
      movies: state.movies.map(movie => 
        movie.id === id ? { ...movie, ...updatedMovie } : movie
      )
    }));
  },

  deleteMovie: (id) => {
    set(state => ({
      movies: state.movies.filter(movie => movie.id !== id)
    }));
  },

  filterMoviesByCategory: (category) => {
    if (category === 'All') return get().movies;
    return get().movies.filter(movie => movie.category === category);
  }
}));
 