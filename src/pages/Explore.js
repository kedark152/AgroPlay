import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import "../styles/pages/home.css";
export const Explore = () => {
  return (
    <div className="Explore Pages">
      <Navbar />
      <div className="home-page-container flex">
        <Sidebar />
        Explore
      </div>
    </div>
  );
};
