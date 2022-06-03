import React, { createContext, useMemo, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useMemo(() => {
    return setUser(localStorage.getItem("user"));
  }, [user]);
  const signIn = (newUser, cb) => {
    setUser(newUser);
    cb();
    localStorage.setItem("user", newUser);
  };
  const signOut = (cb) => {
    setUser(null);
    cb();
    localStorage.removeItem("user");
  };
  const value = { user, signIn, signOut };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
