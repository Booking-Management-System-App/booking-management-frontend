import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import BookAppointmentsPage from "./pages/BookAppointmentsPage";
import MyAppointmentsPage from "./pages/MyAppointmentsPage";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <BookAppointmentsPage />,
  },
  {
    path: "/my-appointments",
    element: <MyAppointmentsPage />,
  },
]);

const Routes = () => {
  return (
      <RouterProvider router={BrowserRouter} />
  );
}

export default Routes;