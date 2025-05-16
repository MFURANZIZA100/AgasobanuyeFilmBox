import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Film, User, LogIn, LogOut } from 'lucide-react';
import { useStore } from '../store';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, currentUser, logout } = useStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-red-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Film className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">AgasobanuyeFilmbox</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/categories" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800">
              Categories
            </Link>
            {isAuthenticated && currentUser?.isAdmin && (
              <Link to="/admin" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800">
                Admin
              </Link>
            )}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium">{currentUser?.username}</span>
                <button 
                  onClick={handleLogout}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800">
                <LogIn className="h-4 w-4 mr-1" />
                Login
              </Link>
            )}
          </div>
          
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-red-800 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/categories"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            {isAuthenticated && currentUser?.isAdmin && (
              <Link 
                to="/admin"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800"
                onClick={() => setIsMenuOpen(false)}
              >
                mfuranzizahamza
              </Link>
            )}
            {isAuthenticated ? (
              <div className="flex flex-col">
                <span className="block px-3 py-2 text-base font-medium">{currentUser?.username}</span>
                <button 
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-red-800"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                to="/login"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-red-800"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn className="h-4 w-4 mr-1" />
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
 