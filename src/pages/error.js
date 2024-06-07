import { useRouteError } from "react-router-dom";

export default function Error() {
  let error = useRouteError();

  return <div>{error.message}</div>;
}
