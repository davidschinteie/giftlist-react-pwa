import { Navigate } from "react-router-dom";
import { UserType } from "../../hooks/useUser";

interface PrivateRouteProps {
  user: UserType | null;
  children: React.ReactNode;
}

const PrivateRoute = ({ user, children }: PrivateRouteProps) => {
  if (!user) {
    return (
      <>
        <Navigate to="/signin" replace />
      </>
    );
  }

  return <>{children}</>;
};

export { PrivateRoute };
