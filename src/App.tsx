import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import AuthCallbackPage from './pages/AuthCallbackPage';
import ProtectedRoute from './auth0/ProtectedRoute';
import UserProfilePage from './pages/UserProfilePage';
function App() {
  return (
    <>
      <Routes>
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
        <Route
          path="/"
          element={
            <Layout showHero>
              <HomePage />
            </Layout>
          }
        />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/user-profile"
            element={
              <Layout>
                <UserProfilePage />
              </Layout>
            }
          />
        </Route>

        <Route path="*" element={<div> page not found</div>} />
      </Routes>
    </>
  );
}

export default App;
