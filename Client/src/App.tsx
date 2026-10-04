import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import ApplicantDashboard from './pages/ApplicantDashboard';
import InspectorDashboard from './pages/InspectorDashboard';
import { ApplyPage } from './pages/PlaceholderPages';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/apply" element={<ApplyPage />} />

          {/* Protected Routes - Applicant */}
          <Route
            path="/applicant/dashboard"
            element={
              <ProtectedRoute allowedRoles={['APPLICANT']}>
                <ApplicantDashboard />
              </ProtectedRoute>
            }
          />

          {/* Protected Routes - Inspector */}
          <Route
            path="/inspector/dashboard"
            element={
              <ProtectedRoute allowedRoles={['INSPECTOR']}>
                <InspectorDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

