/* eslint-disable react/prop-types */
import { useMutation } from "@tanstack/react-query";
import { createContext, useContext, useState, useEffect } from "react";
import {
  login,
  register,
  logout,
  getAccessTokenFromRefresh,
} from "../api/auth";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState("");

  // AUTO LOGIN
  useEffect(() => {
    const tryRefreshToken = async () => {
      try {
        const userData = await getAccessTokenFromRefresh();

        setUser(userData); // Store in your app state
      } catch (err) {
        console.log(err.message);
      }
    };

    tryRefreshToken();
  }, []);

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setUser(data);
      console.log(data);
    },
    onError: (error) => console.error(`Error: ${error.message}`),
  });

  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      setUser(data);
      console.log(data);
    },
    onError: (error) => console.error(`Error: ${error.message}`),
  });

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: (data) => {
      setUser("");
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
        loginMutation,

        register: registerMutation.mutate,
        registerLoading: registerMutation.isLoading,
        registerError: registerMutation.error,
        registerMutation,

        logoutFunc: logoutMutation.mutate,
        logoutLoading: logoutMutation.isLoading,
        logoutError: logoutMutation.error,
        logoutMutation,
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
