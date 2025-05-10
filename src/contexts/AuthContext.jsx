/* eslint-disable react/prop-types */
import { useMutation } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";
import { login, register } from "../api/auth";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState("");

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setUser(data.user);
      console.log(data);
    },
    onError: (error) => console.error(`Error: ${error.message}`),
  });

  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      setUser(data.user);
      console.log(data);
    },
    onError: (error) => console.error(`Error: ${error.message}`),
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        login: loginMutation.mutate,
        loginLoading: loginMutation.isLoading,
        loginError: loginMutation.error,

        register: registerMutation.mutate,
        registerLoading: registerMutation.isLoading,
        registerError: registerMutation.error,
        registerMutation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  const context = useContext(AuthContext);
  if (!AuthContext) throw new Error("Context is used outside of provider");
  return context;
}

export { useAuthContext, AuthProvider };
