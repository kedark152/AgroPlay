import { NavLink } from "react-router-dom";
import "../styles/layouts/sidebar.css";

export const Sidebar = () => {
  return (
    <>
      <aside className="sidebar">
        <div className="cell-block flex-column">
          <NavLink
            className={({ isActive }) =>
              isActive ? "cell active-cell" : "cell inactive-cell"
            }
            to="/"
          >
            <i className="material-icons">home</i>Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "cell active-cell" : "cell inactive-cell"
            }
            to="/explore"
          >
            <i className="material-icons">explore</i>Explore
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "cell active-cell" : "cell inactive-cell"
            }
            to="/playlist"
          >
            <i className="material-icons">playlist_play</i>Playlist
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "cell active-cell" : "cell inactive-cell"
            }
            to="/likedvideos"
          >
            <i className="material-icons">thumb_up</i>Liked Videos
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "cell active-cell" : "cell inactive-cell"
            }
            to="/history"
          >
            <i className="material-icons">history</i>History
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "cell active-cell" : "cell inactive-cell"
            }
            to="/watchlater"
          >
            <i className="material-icons">schedule</i>Watch Later
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "cell active-cell" : "cell inactive-cell"
            }
            to="/profile"
          >
            <i className="material-icons">account_circle</i>My Profile
          </NavLink>
        </div>
      </aside>
    </>
  );
};
