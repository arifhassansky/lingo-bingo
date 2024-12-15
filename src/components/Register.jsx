import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "./auth/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [error, setError] = useState();
  const { createUser, googleSignIn, updateUserProfile } =
    useContext(authContext);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleForm = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError("Password does not match requirements");
      return;
    }

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        updateUserProfile({
          displayName: name,
          photoURL: photo,
        });
        navigate("/");
      })
      .catch(() => {
        setError("");
        setError("Registration failed.");
      });
  };
  return (
    <div className="flex flex-col justify-center items-center bg-loginBg bg-no-repeat bg-cover py-12 px-10">
      <div className="border border-primary p-8 md:p-12 rounded-2xl backdrop-blur-3xl">
        <h2 className="font-extrabold text-2xl md:text-3xl mb-8 md:mb-12">
          Register Your Account
        </h2>
        <form onSubmit={handleForm}>
          <div className="my-4">
            <label className="font-medium text-lg">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="input input-bordered input-info w-full"
              required
            />
          </div>
          <div className="my-4">
            <label className="font-medium text-lg">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Enter Your Photo URL"
              className="input input-bordered input-info w-full"
              required
            />
          </div>
          <div className="my-4">
            <label className="font-medium text-lg">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="input input-bordered input-info w-full"
              required
            />
          </div>
          <div>
            <label className="font-medium text-lg">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="input input-bordered input-info w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full btn bg-primary rounded-md mt-6 text-white py-2 hover:bg-secondary"
          >
            Register
          </button>
        </form>
        <div className="divider divider-info">or</div>
        <button
          onClick={handleGoogleLogin}
          className="bg-secondary text-white px-8 py-2 rounded-lg flex items-center justify-center w-full gap-2"
        >
          <FcGoogle size={20} />
          Login With Google
        </button>
        <h2 className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </h2>
        <p className="my-4 text-red-600">{error}</p>
      </div>
    </div>
  );
};

export default Register;
