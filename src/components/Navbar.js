import "../styles/layouts/navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useVideoAction } from "../context/video-action-context";
import { useLocation } from "react-router-dom";

export const Navbar = ({ setSearchQuery }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { auth, setAuth } = useAuth();
  const { dispatchVideoAction } = useVideoAction();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setAuth({ ...auth, token: "", isLoggedIn: false });
    toast.success("Log out Success");
    navigate("/");
    dispatchVideoAction({ type: "CLEAR-STATE" });
  };
  var windowWidth = window.innerWidth;

  return (
    <>
      <nav id="nav-bar">
        <div
          className={
            location.pathname === "/search" && windowWidth < 800
              ? `display-none`
              : `nav-brand`
          }
        >
          <Link to="/">
            AgroPlay <i className="material-icons">play_circle</i>
          </Link>
        </div>
        <div className="search-field">
          <i
            className="material-icons"
            id="search-icon"
            onClick={() => navigate("/search")}
          >
            search
          </i>

          <input
            type="text"
            name="search-bar"
            id="search-bar"
            className={
              windowWidth < 800 && location.pathname !== "/search"
                ? `display-none`
                : ``
            }
            placeholder="Search"
            onClick={() => navigate("/search")}
            onChange={(e) => {
              setSearchQuery(e.target.value.toLowerCase());
            }}
            autoFocus={location.pathname === "/search"}
          />
        </div>
        <div className="nav-pills fs-sm fw-bold ">
          <div>
            {!auth.isLoggedIn ? (
              <Link to="/login" className="btn btn-solid-icon ">
                Login
                <i className="material-icons mg-left-xsm">login</i>
              </Link>
            ) : (
              <button
                className="btn btn-solid-icon "
                onClick={() => {
                  logoutHandler();
                }}
              >
                Logout
                <i className="material-icons mg-left-xsm">logout</i>
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
