import { Navigate, useLocation } from "react-router-dom";
// import useAuth from "../Components/useAuth/useAuth";
import Loading from "../Components/Loading/Loading";
import useAuth from "../Hooks/useAuth/useAuth";

const PrivateRouter = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useAuth();

    if (loading) {
        return <Loading />
    }
    if (user) {
        return children;
    }
    return (
        <Navigate
            to="/login"
            state={{ from: location }}
            replace>
        </Navigate>
    );
};

export default PrivateRouter;