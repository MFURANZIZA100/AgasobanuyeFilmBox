import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import CategoryPage from './pages/CategoryPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AddMoviePage from './pages/admin/AddMoviePage';
import EditMoviePage from './pages/admin/EditMoviePage';
import { useStore } from './store';

function App() {
  const { isAuthenticated, currentUser } = useStore();
  const isAdmin = isAuthenticated && currentUser?.isAdmin;

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/movies/:id" element={<MovieDetailsPage />} />
            <Route path="/categories" element={<CategoryPage />} />
            <Route path="/categories/:name" element={<CategoryPage />} />
            
            {/* Admin routes - protected by auth check in components */}
            <Route 
              path="/admin" 
              element={isAdmin ? <AdminDashboardPage /> : <LoginPage />} 
            />
            <Route 
              path="/admin/add" 
              element={isAdmin ? <AddMoviePage /> : <LoginPage />} 
            />
            <Route 
              path="/admin/edit/:id" 
              element={isAdmin ? <EditMoviePage /> : <LoginPage />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
 