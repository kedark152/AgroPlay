export const playlistReducer = (state, { type, payload }) => {
  switch (type) {
    case "TOGGLE-PLAYLIST-BOX":
      return {
        ...state,
        setPlaylistBox: !state.setPlaylistBox,
        activeVideoId: !state.setPlaylistBox ? payload : "",
      };
    case "CREATE-NEW-PLAYLIST":
    case "DELETE-PLAYLIST":
    case "UPDATE-PLAYLIST":
      return {
        ...state,
        playlist: payload,
      };
    case "TOGGLE-TICK-PLAYLIST":
      return {
        ...state,
        playlist: toggleTickPlaylist(state, payload),
      };
  }
};

export const playlistInitialState = {
  setPlaylistBox: false,
  activeVideoId: "",
  playlist: [],
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
