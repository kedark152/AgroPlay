import "../styles/layouts/navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  {
    console.log(auth);
  }
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setAuth({ ...auth, token: "", isLoggedIn: false });
    toast.success("Log out Success");
    navigate("/");
  };
  return (
    <>
      <nav id="nav-bar">
        <div className="nav-brand">
          <Link to="/">
            AgroPlay <i className="material-icons">play_circle</i>
          </Link>
        </div>
        <div className="search-field">
          <i className="material-icons" id="search-icon">
            search
          </i>

          <input
            type="text"
            name="search-bar"
            id="search-bar"
            placeholder="Search"
          />
        </div>
        <ul className="nav-pills fs-sm fw-bold ">
          <li>
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
          </li>
        </ul>
      </nav>
    </>
  );
};
