/* eslint-disable react/prop-types */
import { useMutation } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";
import { useAuthContext } from "./AuthContext";

const NotificationContext = createContext();

function NotificationProvider({ children }) {
  const [Notification, setNotification] = useState("");

  //   const getNotificationsMutation = useMutation({
  //     mutationFn: getNotifications,
  //     onSuccess: (data) => {
  //       setUser(data);
  //       console.log(`The data -> ${data}`);
  //       console.log(data);
  //       console.log(user);
  //     },
  //     onError: (error) => console.error(`Error: ${error.message}`),
  //   });

  //   const registerMutation = useMutation({
  //     mutationFn: register,
  //     onSuccess: (data) => {
  //       setUser(data);
  //       console.log(data);
  //     },
  //     onError: (error) => console.error(`Error: ${error.message}`),
  //   });

  //   const logout = () => {
  //     setUser("");
  //   };

  return (
    <NotificationContext.Provider>{children}</NotificationContext.Provider>
  );
}

function useNotificationContext() {
  const context = useContext(NotificationContext);
  if (!NotificationContext)
    throw new Error("Context is used outside of provider");
  return context;
}

export { useNotificationContext, NotificationProvider };
