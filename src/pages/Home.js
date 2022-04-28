import { ChipsContainer } from "../components/ChipsContainer";
import { Loader } from "../components/Loader";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { VideoCard } from "../components/VideoCard";
import { GetVideos } from "../services/getVideos";
import "../styles/pages/home.css";
export const Home = () => {
  const { loader, videos } = GetVideos();
  const displayAllVideos = videos;
  return (
    <div className="Home Pages">
      <Navbar />

      <div className="home-page-container">
        <Sidebar />
        <ChipsContainer />
        {loader && <Loader />}
        <div className="fs-md info-message">
          {!loader && displayAllVideos.length == 0 && "No Videos Found"}
        </div>
        <div className="video-listing">
          {!loader &&
            displayAllVideos.map((video) => (
              <VideoCard key={video._id} videoCardDetails={video} />
            ))}
        </div>
      </div>
    </div>
  );
};
