import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/app/Error";
import AppLayout from "./components/app/AppLayout";
import NotificationsPage from "./pages/NotificationsPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [{ path: "", element: <NotificationsPage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
