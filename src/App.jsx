import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Error from "./components/app/Error";
import AppLayout from "./components/app/AppLayout";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import NotificationsPage from "./pages/NotificationsPage";
import Setting from "./pages/Setting";
import ForumPage from "./pages/ForumPage";
import SignUpPage from "./pages/SignUpPage";
import Chatbot from "./pages/Chatbot";
import LoginPage from "./pages/LoginPage";
import TicketDetailsPage from "./pages/TicketDetailsPage";

import ProtectedRoute from "./features/auth/ProtectedRoute";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/home" /> },
  {
    element: (
      <ProtectedRoute reverse={true}>
        <Homepage />
      </ProtectedRoute>
    ),

    path: "/home",
  },
  {
    element: (
      <ProtectedRoute reverse={true}>
        <SignUpPage />
      </ProtectedRoute>
    ),

    path: "/signup",
  },
  {
    element: (
      <ProtectedRoute reverse={true}>
        <LoginPage />
      </ProtectedRoute>
    ),
    path: "/login",
  },
  {
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/tickets", element: <TicketDetailsPage /> },
      { path: "/notifications", element: <NotificationsPage /> },
      { path: "/settings", element: <Setting /> },
      { path: "/forum", element: <ForumPage /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/chatbot", element: <Chatbot /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
