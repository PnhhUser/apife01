import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layouts/layout";
import Home from "./pages/home";
import Login, { action as loginAction } from "./pages/login";
import Profile from "./pages/profile";
import { Auth } from "./components/authen";
import Error from "./pages/error";
import { Role } from "./components/role";

export default function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route
          index
          element={
            <Auth>
              <Home />
            </Auth>
          }
        />

        <Route path="login" element={<Login />} action={loginAction} />

        <Route
          path="profile"
          element={
            <Auth>
              <Role name="admin">
                <Profile />
              </Role>
            </Auth>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
