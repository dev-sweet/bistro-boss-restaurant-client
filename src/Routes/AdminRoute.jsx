import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import Loader from "../Pages/Shared/Loader/Loader";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    return <Loader />;
  }
  if (user && isAdmin) {
    return children;
  }
  return (
    <Navigate to="/login" replace={true} state={{ from: location.pathname }} />
  );
};

export default AdminRoute;
