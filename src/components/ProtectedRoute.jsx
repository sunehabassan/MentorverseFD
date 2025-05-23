import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const Stutoken = localStorage.getItem("Token");
  const MentorToken = localStorage.getItem("mentorToken")

  if (!Stutoken && !MentorToken) {

    return <Navigate to="/PageNotFound" replace />;
  }

  return children;
};

export default ProtectedRoute;