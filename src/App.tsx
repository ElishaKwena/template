// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/ui/ThemeProvider';
import ErrorBoundary from './components/ui/ErrorBoundary';
import AOSInitializer from './components/ui/AOSInitializer';
import Navbar from './components/common/Navbar';
import ThemeDebug from './components/ui/ThemeDebug';
import AppRouter from './routes/AppRouter';
import LoadingSpinner from './components/ui/LoadingSpinner';
import { ROUTES } from './lib/constants';
import { AuthProvider } from './context/AuthContext';

// Wrapper component for navbar visibility logic
const AppLayout = () => {
  const location = useLocation();
  const noNavbarPaths = [
    ROUTES.Landing,
    ROUTES.Register,
    ROUTES.Login
    // Add other routes where navbar should be hidden
  ];

  return (
    <>
      {!noNavbarPaths.includes(location.pathname) && <Navbar />}
      <AOSInitializer/>
      <AppRouter />
      {/* <ThemeDebug /> */}
    </>
  );
};

import LandingPage from './pages/LandingPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <ThemeProvider>
      <ErrorBoundary>
<<<<<<< HEAD
        <AuthProvider>
          <Router>
            <AppLayout />
          </Router>
        </AuthProvider>
=======
        <Router>
          {/* <Navbar /> */}
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes> */}
          <LandingPage/>
          {/* <ThemeDebug /> */}
        </Router>
>>>>>>> 8d46ff6be87c6b3d2c31bee871a286a7217bf168
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;