import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import "../styles/pages/errorPage.css";
export const ErrorPage = () => {
  return (
    <>
      <div className="Error Pages">
        <Navbar />

        <div className="error-page-container">
          <Sidebar />
          <div className="error-image-cont">
            <img
              src="https://res.cloudinary.com/dvuh4fz9d/image/upload/v1652809269/404_Error-amico_gq6jqz.svg"
              alt="page-not-found"
              className="img-responsive error-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};
