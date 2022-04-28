import "../styles/layouts/navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav id="nav-bar">
        <div className="nav-brand">
          <a href="/">
            AgroPlay <i className="material-icons">play_circle</i>
          </a>
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
        <ul className="nav-pills fs-sm-plus fw-bold">
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
