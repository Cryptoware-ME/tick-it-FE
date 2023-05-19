import { AuthContext } from "./AuthContext";
import { useAuth } from "./useAuth";

export const AuthProvider = ({ children }) => {
  const { user, logOut, login } = useAuth();

  return (
    <AuthContext.Provider value={{ user, logOut, login }}>
      {children}
    </AuthContext.Provider>
  );
};
