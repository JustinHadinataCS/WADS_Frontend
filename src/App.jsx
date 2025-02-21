import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/app/AppLayout";
import Error from "./components/app/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [{ path: "/", element: <div>Test</div> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
