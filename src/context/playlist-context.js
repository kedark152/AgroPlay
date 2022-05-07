import { useReducer, useContext, createContext } from "react";
import {
  playlistReducer,
  playlistInitialState,
} from "../reducer/playlistReducer";
const PlaylistContext = createContext(playlistInitialState);

const PlaylistProvider = ({ children }) => {
  const [playlistState, dispatchPlaylist] = useReducer(
    playlistReducer,
    playlistInitialState
  );

  return (
    <PlaylistContext.Provider value={{ playlistState, dispatchPlaylist }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { PlaylistProvider, usePlaylist };
