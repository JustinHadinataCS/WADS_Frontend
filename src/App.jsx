import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/app/Error";
import AppLayout from "./components/app/AppLayout";
import TicketDetailsPage from "./pages/TicketDetailsPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [{ path: "", element: <TicketDetailsPage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
