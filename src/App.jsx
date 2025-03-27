import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/app/Error";
import AppLayout from "./components/app/AppLayout";
import ForumPage from "./pages/ForumPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [{ path: "", element: <ForumPage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
