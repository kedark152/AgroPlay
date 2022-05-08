import { useReducer, useContext, createContext } from "react";
import {
  videoActionReducer,
  videoActionInitialState,
} from "../reducer/videoActionReducer";
const VideoActionContext = createContext(videoActionInitialState);

const VideoActionProvider = ({ children }) => {
  const [videoActionState, dispatchVideoAction] = useReducer(
    videoActionReducer,
    videoActionInitialState
  );

  return (
    <VideoActionContext.Provider
      value={{ videoActionState, dispatchVideoAction }}
    >
      {children}
    </VideoActionContext.Provider>
  );
};

const useVideoAction = () => useContext(VideoActionContext);

export { VideoActionProvider, useVideoAction };
