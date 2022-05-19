import { NavLink } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import "../styles/pages/profile.css";
export const MyProfile = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return (
    <>
      <div className="Profile Pages">
        <Navbar />

        <div className="profile-page-container">
          <Sidebar />
          <div className="profile-card-container">
            <div className="profile-card">
              <h2 className="text-center">My Profile</h2>
              <div className="avatar avatar-lg align-center">
                <img
                  className="img-round"
                  src="https://res.cloudinary.com/dvuh4fz9d/image/upload/v1652893486/irene-strong-v2aKnjMbP_k-unsplash_frd8hv.jpg"
                  alt="avatar-sample-image-large"
                />
              </div>
              <h3 className="mg-y-xsm ">• About Me:</h3>
              <h4>{`Name: ${userData.firstName} ${userData.lastName}`}</h4>
              <h4>Email: {userData.email}</h4>
              <div className="quick-links flex-column">
                <h3 className="mg-y-xsm">• Quick Links:</h3>
                <NavLink to="/playlist" className="white-color fs-sm">
                  Playlist
                </NavLink>
                <NavLink to="/watchlater" className="white-color fs-sm">
                  Watch Later
                </NavLink>
                <NavLink to="/likedvideos" className="white-color fs-sm">
                  Liked Videos
                </NavLink>
                <NavLink to="/history" className="white-color fs-sm">
                  History
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
