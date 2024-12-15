import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "./auth/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Login = () => {
  const { login, googleSignIn, setEmail } = useContext(authContext);
  const [error, setError] = useState();

  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        toast.success("login successful!");
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Login failed");
      });
  };

  const handleForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    setEmail(email);

    login(email, password)
      .then(() => {
        toast.success("login successful!");
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        setError("");
        setError("Invalid username or password");
        toast.error("Login failed");
      });
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-[90vh] bg-loginBg bg-no-repeat bg-cover py-12 z-50 px-10">
      <div className="border border-primary p-8 md:p-12 lg:p-16 rounded-2xl backdrop-blur-3xl shadow-lg">
        <form onSubmit={handleForm}>
          <h2 className="font-extrabold text-2xl md:text-3xl mb-8 md:mb-12">
            Login Your Account
          </h2>
          <div className="my-4">
            <label className="font-medium text-lg">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered input-info w-full max-w-xs"
              required
            />
          </div>
          <div>
            <label className="font-medium text-lg">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="input input-bordered input-info w-full max-w-xs"
              required
            />
          </div>
          <p className=" mt-4">
            <Link to="/resetPassword" className="text-gray-500">
              Forget password?
            </Link>
          </p>
          <button
            type="submit"
            className="w-full btn bg-primary rounded-md mt-6 text-white py-2 hover:bg-secondary"
          >
            Login
          </button>

          <div className="divider divider-info">Or</div>

          <button
            onClick={handleGoogleLogin}
            className="bg-secondary text-white px-8 py-2 rounded-lg flex items-center justify-center w-full gap-2"
          >
            <FcGoogle size={20} />
            Login With Google
          </button>

          <h2 className="mt-4 text-center">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-primary">
              Register
            </Link>
          </h2>
        </form>
        <p className="my-4 text-red-600">{error}</p>
      </div>
    </div>
  );
};

export default Login;
