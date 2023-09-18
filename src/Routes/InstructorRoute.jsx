import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useInstructor from "../Hooks/useInstructor/useInstructor";
import Loading from "../Components/Loading/Loading";


const InstructorRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const [isInstructor, isInstructorLoading] = useInstructor();
  const location = useLocation();

  if (loading || isInstructorLoading) {
    return (
      <Loading/>
    );
  }
  if (user && isInstructor) {
    return children;
  } else {
    return <Navigate to="/" state={{ from: location }}></Navigate>;
  }
};

export default InstructorRoute;