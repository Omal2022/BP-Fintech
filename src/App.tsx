import { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Loader from "./components/Loader";

const AdminLoginPage = lazy(() => import("./pages/admin/AdminLoginPage"));
const AdminVerificationCode = lazy(
  () => import("./pages/admin/AdminVerificationCode")
);
const AdminRestPasswordPage = lazy(
  () => import("./pages/admin/AdminRestPasswordPage")
);
const AdminNewPassword = lazy(() => import("./pages/admin/AdminNewPassword"));
const AdminPasswordSuccessful = lazy(
  () => import("./pages/admin/AdminPasswordSuccessful")
);
const HomeDashboard = lazy(() => import("./pages/dashboard/HomeDashboard"));

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <AdminLoginPage />
          </Suspense>
        }
      />
      <Route
        path="/admin/verify"
        element={
          <Suspense fallback={<Loader />}>
            <AdminVerificationCode />
          </Suspense>
        }
      />
      <Route
        path="/admin/reset"
        element={
          <Suspense fallback={<Loader />}>
            <AdminRestPasswordPage />
          </Suspense>
        }
      />
      <Route
        path="/admin/new-password"
        element={
          <Suspense fallback={<Loader />}>
            <AdminNewPassword />
          </Suspense>
        }
      />
      <Route
        path="/admin/success"
        element={
          <Suspense fallback={<Loader />}>
            <AdminPasswordSuccessful />
          </Suspense>
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <Suspense fallback={<Loader />}>
              <HomeDashboard />
            </Suspense>
          </ProtectedRoute>
        }
      />

      <Route path="/admin/login" element={<Navigate to="/" replace />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/" replace />;
}

export default App;
