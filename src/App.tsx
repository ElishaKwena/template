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
        <AuthProvider>
          <Router>
            <AppLayout />
          </Router>
        </AuthProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;