import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BookAppointmentsPage from "./pages/BookAppointmentsPage";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <BookAppointmentsPage />,
  },
]);

const Routes = () => {
  return (
      <RouterProvider router={BrowserRouter} />
  );
}

export default Routes;