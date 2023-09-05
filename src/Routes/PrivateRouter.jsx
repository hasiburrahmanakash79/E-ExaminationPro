import { Navigate, useLocation } from "react-router-dom";
// import useAuth from "../Components/useAuth/useAuth";
import Loading from "../Components/Loading/Loading";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }}></Navigate>;
  }
};

export default PrivateRouter;
