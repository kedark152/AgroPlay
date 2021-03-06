export const videoActionReducer = (state, { type, payload }) => {
  switch (type) {
    case "TOGGLE-PLAYLIST-BOX":
      return {
        ...state,
        setPlaylistBox: !state.setPlaylistBox,
        activeVideo: !state.setPlaylistBox ? payload : {},
      };
    case "CREATE-NEW-PLAYLIST":
    case "DELETE-PLAYLIST":
    case "UPDATE-PLAYLIST":
      return {
        ...state,
        playlist: payload,
      };
    case "TOGGLE-TICK-PLAYLIST": // add/remove video from playlist
      return {
        ...state,
        playlist: toggleTickPlaylist(state, payload),
      };
    case "ADD-TO-WATCH-LATER":
    case "REMOVE-FROM-WATCH-LATER":
      return {
        ...state,
        watchlater: payload,
      };
    case "ADD-TO-LIKES":
    case "REMOVE-FROM-LIKES":
      return {
        ...state,
        likes: payload,
      };
    case "ADD-TO-HISTORY":
    case "REMOVE-FROM-HISTORY":
    case "DELETE-HISTORY":
      return {
        ...state,
        history: payload,
      };
    case "UPDATE-STATE-ON-LOGIN":
      return {
        ...state,
        playlist: payload.playlists,
        watchlater: payload.watchlater,
        likes: payload.likes,
        history: payload.history,
      };

    case "CLEAR-STATE":
      return videoActionInitialState;
  }
};

export const videoActionInitialState = {
  setPlaylistBox: false,
  activeVideo: {},
  playlist: [],
  watchlater: [],
  likes: [],
  history: [],
};

function toggleTickPlaylist(state, payload) {
  state.playlist.map((playlistObj, index) => {
    if (playlistObj._id == payload._id) {
      state.playlist[index] = {
        ...state.playlist[index],
        videos: payload.videos,
      };
    }
  });
  return state.playlist;
}
