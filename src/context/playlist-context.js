import { createContext, useContext, useReducer } from "react";

const PlaylistContainer = createContext();

export default function usePlaylist() {
  return useContext(PlaylistContainer);
}

export function PlaylistProvider({ children }) {
  const AddToPlaylist = (state, playlistName, id) => {
    console.log("Add", state);
    return state.map((item) => {
      if (item.name === playlistName) {
        if (item.id.includes(id)) {
          return { ...item, id: item.id };
        }
        return { ...item, id: [...item.id, id] };
      }
      return item;
    });
  };

  const CreatePlaylist = (state, playlistName, id) => {
    console.log("Create");
    return [
      ...state,
      {
        name: playlistName,
        id: [id],
      },
    ];
  };

  const TogglePlaylistVideo = (state, playlistName, id) => {
    console.log("Toggle", { state });
    console.log({ playlistName }, { id });
    return state.map((item) => {
      if (item.name === playlistName) {
        if (item.id.includes(id)) {
          return { ...item, id: item.id.filter((item) => item !== id) };
        }
        return { ...item, id: [...item.id, id] };
      }
      return item;
    });
  };

  const playlistdisptachFun = (state, value) => {
    let { id, playlistName } = value.PAYLOAD;
    console.log(state);
    switch (value.TYPE) {
      case "CREATE":
        return state && state.find((item) => item.name === playlistName)
          ? AddToPlaylist(state, playlistName, id)
          : CreatePlaylist(state, playlistName, id);
      case "TOGGLE":
        return TogglePlaylistVideo(state, playlistName, id);
      default:
        return state;
    }
  };
  const [playlist, playlistdispatch] = useReducer(playlistdisptachFun, []);
  return (
    <PlaylistContainer.Provider
      value={{
        playlist: playlist,
        playlistdispatch: playlistdispatch,
      }}
    >
      {" "}
      {children}{" "}
    </PlaylistContainer.Provider>
  );
}
