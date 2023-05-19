export const useAuth = () => {
  const [user, setUser] = React.State([]);

  const logIn = (user) => {
    setUser(user);
    localStorage.setItem("token", "Bearer " + user.token);
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return { user, logOut, logIn };
};
