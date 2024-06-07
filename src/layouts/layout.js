import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { useAuthen } from "../contexts/authContext";

export default function Layout() {
  const { token } = useAuthen();

  return (
    <div>
      {token && <Navbar />}

      <div>
        <Outlet />
      </div>
    </div>
  );
}
