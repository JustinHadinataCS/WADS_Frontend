import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/app/Error";
import AppLayout from "./components/app/AppLayout";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import NotificationsPage from "./pages/NotificationsPage";
import Setting from "./pages/Setting";
import ForumPage from "./pages/ForumPage";
import SignUpPage from "./pages/SignUpPage";
import Chatbot from "./pages/Chatbot";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./features/auth/ProtectedRoute";

const router = createBrowserRouter([
  {
    element: <Homepage />,
    path: "/home",
  },
  {
    element: <SignUpPage />,
    path: "/signup",
  },
  {
    element: <LoginPage />,
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
      { path: "/tickets", element: <Tickets /> },
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
