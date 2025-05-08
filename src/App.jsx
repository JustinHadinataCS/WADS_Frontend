import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/app/Error";
import AppLayout from "./components/app/AppLayout";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import NotificationsPage from "./pages/NotificationsPage";
import Setting from "./pages/Setting";
import ForumPage from "./testing/ForumPage";

const router = createBrowserRouter([
  {
    element: <Homepage />,
    path: "/home",
  },
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/tickets", element: <Tickets /> },
      { path: "/notifications", element: <NotificationsPage /> },
      { path: "/settings", element: <Setting /> },
      { path: "/", element: <ForumPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
