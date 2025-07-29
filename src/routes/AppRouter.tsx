import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoutes';
import LoadingSpinner from '../components/ui/LoadingSpinner';

// Lazy loading pages
const HomePage = lazy(() => import('../pages/Home/Homepage'));
const LoginPage = lazy(() => import('../pages/Auth/Login'));
const RegisterPage = lazy(() => import('../pages/Auth/Register'));
const LandingPage = lazy(() => import('../pages/Landing/Landingpage'));
const Dashboard = lazy(() => import('../pages/Admin/Dashboard'));
const Users = lazy(() => import('../pages/Admin/Users'));
const Analytics = lazy(() => import('../pages/Admin/Analytics'));


const ProfilePage = lazy(() => import('../pages/Profile/Profilepage'));

const UnauthorizedPage = lazy(() => import('../pages/Error/Unauthorized'));
const NotFoundPage = lazy(() => import('../pages/Error/NotFound'));
const ServerErrorPage = lazy(() => import('../pages/Error/ServerError'));

const Colorpage = lazy(() => import('../components/ColorFontShowcase'));

const AppRouter: React.FC = () => {
    return(
        <Suspense fallback={<LoadingSpinner fullScreen={true} />}>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/unauthorized" element={<UnauthorizedPage />} />
                <Route path="/not-found" element={<NotFoundPage />} />
                <Route path="/server-error" element={<ServerErrorPage />} />
                <Route path="/colors" element={<Colorpage />} />


                {/* Catch-all for undefined routes */}
                
                {/* Protected Routes */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    {/* Add more protected routes here */}
                </Route>

                {/* Admin Routes */}
                <Route element={<ProtectedRoute adminOnly={true} />}>
                    <Route path="/admin/dashboard" element={<Dashboard />} />
                    <Route path="/admin/users" element={<Users />} />
                    <Route path="/admin/analytics" element={<Analytics />} />
                </Route>

                {/* Fallback route for undefined paths */}
                <Route path="*" element={<NotFoundPage />} />

                {/* FallBack route for Unauthoriised paths */}
                <Route path="/unauthorized" element={<UnauthorizedPage />} />
                <Route path="/server-error" element={<ServerErrorPage />} />




            </Routes>
        </Suspense>
    )
}
export default AppRouter;