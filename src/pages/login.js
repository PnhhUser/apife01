import { Form, Navigate, redirect } from "react-router-dom";
import { apiLogin } from "../commons/utils";
import { useAuthen } from "../contexts/authContext";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  if (email.length === 0 || password.length === 0) {
    return "email and password is undefined";
  }

  if (email && password) {
    await apiLogin(email, password);

    window.location.reload();

    return setTimeout(() => {
      return redirect("/");
    }, 1000);
  }

  return null;
};

export default function Login() {
  const { token } = useAuthen();

  if (token) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <div>
        <h1> Login </h1>
      </div>
      <Form method="post">
        <div className="mb-2">
          <input
            type="email"
            name="email"
            className="border-[1px] border-[#111] outline-none indent-2"
            placeholder="email"
            autoComplete="false"
          />
        </div>
        <div className="mb-2">
          <input
            type="password"
            name="password"
            className="border-[1px] border-[#111] outline-none indent-2"
            placeholder="password"
            autoComplete="false"
          />
        </div>
        <div>
          <button type="submit" className="bg-green-600 text-white px-3 py-2">
            Login
          </button>
        </div>
      </Form>
    </div>
  );
}
