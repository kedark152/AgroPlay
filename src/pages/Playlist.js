import { Loader } from "../components/Loader";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { VideoCard } from "../components/VideoCard";
import { GetPlaylist } from "../services/getPlaylist";
import { useAuth } from "../context/auth-context";
import { PlaylistBox } from "../components/PlaylistBox";
import { usePlaylist } from "../context/playlist-context";
import { deletePlaylist } from "../utils/deletePlaylist";
import "../styles/pages/playlist.css";

export const Playlist = () => {
  const { auth } = useAuth();
  const { playlistState, dispatchPlaylist } = usePlaylist();
  const { loader, playlist } = GetPlaylist(playlistState);
  const displayPlaylist = playlist;

  return (
    <div className="Playlist Pages">
      <Navbar />
      <div className="playlist-page-container">
        <Sidebar />
        {loader && <Loader />}

        <div className="fs-md info-message">
          {!loader && displayPlaylist.length == 0 && "No Playlist Found"}
        </div>
        <div>
          <h2 className="text-center white-color mg-sm">Playlist Page</h2>
          {!loader &&
            displayPlaylist.map((playlist) => (
              <div key={playlist._id}>
                <p className="playlist-name fs-sm-plus align-center white-color mg-xsm">
                  <i className="material-icons  mg-left-xsm">playlist_play</i>
                  {`${playlist.title} (${playlist.videos.length} Videos)`}
                  <i
                    className="material-icons mg-left-xsm"
                    onClick={() =>
                      deletePlaylist({
                        auth,
                        playlistId: playlist._id,
                        playlistName: playlist.title,
                        dispatchPlaylist,
                      })
                    }
                  >
                    delete
                  </i>
                </p>
                <div className="video-listing">
                  {playlist.videos.map((video) => (
                    <VideoCard key={video._id} videoCardDetails={video} />
                  ))}
                </div>
              </div>
            ))}
          {playlistState.setPlaylistBox && <PlaylistBox />}
        </div>
      </div>
    </div>
  );
};
