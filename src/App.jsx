import { Routes, Route, Navigate } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import ProductReviews from "./pages/ProductReviews";
import ProductSpecs from "./pages/ProductSpecs";
import ProductIndex from "./pages/ProductIndex";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./pages/DashboardHome";
import DashboardProfile from "./pages/DashboardProfile";
import DashboardSettings from "./pages/DashboardSettings";
import Search from "./pages/Search";
import Login from "./pages/Login";
import ProtectedPage from "./pages/ProtectedPage";
import AuthLayout from "./components/AuthLayout";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      {/* Main layout wrapping all routes */}
      <Route path="/" element={<Layout />}>
        {/* Index route */}
        <Route index element={<Home />} />

        {/* Basic routes */}
        <Route path="about" element={<About />} />

        {/* Search params demo */}
        <Route path="search" element={<Search />} />

        {/* Dynamic params + nested routes */}
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetail />}>
          <Route index element={<ProductIndex />} />
          <Route path="reviews" element={<ProductReviews />} />
          <Route path="specs" element={<ProductSpecs />} />
        </Route>

        {/* Layout route (no path) for dashboard with nested routes */}
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<DashboardProfile />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>

        {/* Layout route without a path for auth pages */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>

        {/* Protected route with redirect */}
        <Route path="protected" element={<ProtectedPage />} />

        {/* Redirect example */}
        <Route path="old-about" element={<Navigate to="/about" replace />} />

        {/* Catch-all / 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
