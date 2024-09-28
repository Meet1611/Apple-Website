;import { Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage";

const ProtectedRoute = ({ isLoggedIn, component: Component }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" />; // Redirect to login page
  }

  return <Component />; // Render the protected component
};

export default ProtectedRoute;
