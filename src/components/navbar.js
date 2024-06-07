import { Link } from "react-router-dom";
import { removeStorageByName } from "../commons/utils";
import { localName } from "../commons/constants";
import { useAuthen } from "../contexts/authContext";

export default function Navbar() {
  const { token } = useAuthen();

  const handleLogout = () => {
    removeStorageByName(localName.token);
    window.location.reload();
  };
  return (
    <div>
      <Link to="/"> home </Link>
      <Link to="profile"> profile </Link>
      {token ? (
        <p onClick={handleLogout}>logout</p>
      ) : (
        <Link to="login"> login </Link>
      )}
    </div>
  );
}
