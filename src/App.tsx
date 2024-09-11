import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import AuthCallbackPage from './pages/AuthCallbackPage';
import ProtectedRoute from './auth0/ProtectedRoute';
import UserProfilePage from './pages/UserProfilePage';
import ManageRestaurantPage from './pages/ManageRestaurantPage';
import SearchPage from './pages/SearchPage';
import OrderStatusPage from './pages/OrderStatusPage';
import DetailPage from './pages/DetailPage';
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
        <Route
          path="/search/:city"
          element={
            <Layout showHero={false}>
              <SearchPage />
            </Layout>
          }
        />
        <Route
          path="/detail/:restaurantId"
          element={
            <Layout showHero={false}>
              <DetailPage />
            </Layout>
          }
        />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/order-status"
            element={
              <Layout>
                <OrderStatusPage />
              </Layout>
            }
          />
          <Route
            path="/user-profile"
            element={
              <Layout>
                <UserProfilePage />
              </Layout>
            }
          />
          <Route
            path="/manage-restaurant"
            element={
              <Layout>
                <ManageRestaurantPage />
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
