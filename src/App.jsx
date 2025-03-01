import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/app/Error";
import AppLayout from "./components/app/AppLayout";
import Dashboard from "./pages/Dashboard"
import Setting from "./pages/Setting"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [{ path: "", element: <Setting/> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
