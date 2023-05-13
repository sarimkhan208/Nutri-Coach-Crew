import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  let nutriUserToken = localStorage.getItem("nutriUserToken") || null;

  if (nutriUserToken !== null) {
    return <>{children}</>;
  } else {
    alert("Please login first");
    return <Navigate to="/signin" />;
  }
}

export default PrivateRoute;
