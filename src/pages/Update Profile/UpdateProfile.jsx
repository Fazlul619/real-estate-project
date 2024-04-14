import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const [isEmailDisabled, setIsEmailDisabled] = useState(true);
  const handleEmailChange = (e) => {
    setIsEmailDisabled(e.target.value);
  };
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("name");

    const image = form.get("image");
    console.log(name, image);

    updateUserProfile(name, image)
      .then((result) => {
        console.log(result);
        toast.success("Update Profile Successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleUpdateProfile} className="card-body">
            <p className=" text-center font-bold">Update Your Profile</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered disabled"
                onChange={handleEmailChange}
                disabled={isEmailDisabled}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Photo Url"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Update Profile</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateProfile;
