import { useContext } from "react";
import { authContext } from "./auth/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(authContext);
  return (
    <div className=" py-12 bg-primaryBg">
      <div className="text-center">
        <h2 className="font-semibold text-xl md:text-2xl mb-2">
          Welcome {user?.displayName}!
        </h2>
        <p className="text-gray-500">
          In the section below you can see and upadate your profile information.
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8 p-16 bg-primaryBg">
        <div className="flex flex-col justify-center">
          <p className="font-semibold text-lg mb-4">Name: {user.displayName}</p>
          <p className="text-gray-600">Email:{user.email}</p>

          <Link
            to="/updateProfile"
            className="btn bg-primary rounded-md mt-6 text-white py-2 hover:bg-secondary"
          >
            Upadate
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <figure className="border p-4 rounded-xl">
            <img
              className="w-40 h-40 object-cover rounded-xl"
              src={user.photoURL}
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Profile;
