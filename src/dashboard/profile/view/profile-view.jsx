import { useAuthContext } from "../../../hooks/useAuthContext";

export default function ProfileView() {
  const { user } = useAuthContext();

  return (
    <div className="rounded mt-4 shadow p-4">
      <div className="d-flex align-items-center userdiv mt-4">
        <div className="mt-3  userphoto">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
            style={{ height: "100px", width: "100px", marginRight: "20px" }}
            className="rounded-circle"
            alt="Userphoto"
          />
        </div>
        <div className="userdetails ">
          <p className="fw-bold">{`${user?.firstName} ${user?.lastName}`}</p>
          <p className="text-secondary">{user?.email}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 mt-4 p-2">
          <form className="p-2">
            <p className="text-primary fw-bold fs-4">User Details</p>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Full Name
              </label>
              <input
                value={`${user.firstName} ${user.middleName ?? ""} ${
                  user.lastName
                }`}
                type="fullname"
                className="form-control"
                id="exampleInputfullname"
                aria-describedby="fullnameHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                value={user.email}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Phone Number
              </label>
              <input
                type="phonenumber"
                value={user.contactNumber}
                className="form-control"
                id="exampleInputphonenumber"
                aria-describedby="phonenumberHelp"
              />
            </div>
            <button type="button" className="btn btn-primary">
              Edit Profile
            </button>
          </form>
        </div>
        <div className="col-6 divpassword mt-4 p-2">
          <form className="p-2">
            <p className="text-primary fw-bold fs-4">Change password</p>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Old Password
              </label>
              <input
                type="OldPassword"
                className="form-control"
                id="exampleInputOldPassword"
                aria-describedby="fullnameHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                New Password
              </label>
              <input
                type="NewPassword"
                className="form-control"
                id="exampleInputNewPassword"
                aria-describedby="fullnameHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Confirm Password
              </label>
              <input
                type="ConfirmPassword"
                className="form-control"
                id="exampleInputConfirmPassword"
                aria-describedby="fullnameHelp"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
