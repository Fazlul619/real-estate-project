import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("USER PROFILE PAGE");

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="card w-96 bg-base-100 shadow-xl mt-24 mx-auto border">
        <figure className="px-10 pt-10">
          <img
            src={user?.photoURL ?? "https://i.ibb.co/K04mCKf/Human.jpg"}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center ">
          <h2 className="card-title">{user?.displayName ?? "User"}</h2>
          <p>{user?.email ?? "User Email"}</p>
          <div className="card-actions">
            <Link to="/updateProfile">
              <button className="btn btn-primary">Update Profile</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
