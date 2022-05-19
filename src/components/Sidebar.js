import { NavLink } from "react-router-dom";
import "../styles/layouts/sidebar.css";

export const Sidebar = () => {
  var windowWidth = window.innerWidth;
  return (
    <>
      <aside className="sidebar">
        <div className="cell-block ">
          <NavLink
            className={({ isActive }) =>
              isActive ? "cell active-cell" : "cell inactive-cell"
            }
            to="/"
          >
            <i className="material-icons">home</i>
            <span className="cell-name">Home</span>
          </NavLink>
          {windowWidth < 800 && (
            <NavLink
              className={({ isActive }) =>
                isActive ? "cell active-cell" : "cell inactive-cell"
              }
              to="/search"
            >
              <i className="material-icons">search</i>
              <span className="cell-name">Search</span>
            </NavLink>
          )}
          <NavLink
            className={({ isActive }) =>
              isActive ? "cell active-cell" : "cell inactive-cell"
            }
            to="/explore"
          >
            <i className="material-icons">explore</i>
            <span className="cell-name">Explore</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "m-cell active-cell" : "m-cell inactive-cell"
            }
            to="/playlist"
          >
            <i className="material-icons">playlist_play</i>
            <span className="cell-name">Playlist</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "m-cell active-cell" : "m-cell inactive-cell"
            }
            to="/likedvideos"
          >
            <i className="material-icons">thumb_up</i>
            <span className="cell-name">Liked Videos</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "m-cell active-cell" : "m-cell inactive-cell"
            }
            to="/history"
          >
            <i className="material-icons">history</i>
            <span className="cell-name">History</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "m-cell active-cell" : "m-cell inactive-cell"
            }
            to="/watchlater"
          >
            <i className="material-icons">schedule</i>
            <span className="cell-name">Watch Later</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "cell active-cell" : "cell inactive-cell"
            }
            to="/profile"
          >
            <i className="material-icons">account_circle</i>
            <span className="cell-name">My Profile</span>
          </NavLink>
        </div>
      </aside>
    </>
  );
};
