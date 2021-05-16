import { createContext, useContext, useReducer, useEffect } from "react";
import useVideos from "./playlist-context";
import allVideos from "../data/videos";
import getPlaylist from "../api/playlist-api";
import useData from "../context/data-context";
const PlaylistContainer = createContext();

export default function usePlaylist() {
  return useContext(PlaylistContainer);
}

export function PlaylistProvider({ children }) {
  const { data, setData } = useData();

  useEffect(() => {
    const getplaylists = async (token) => {
      const playlists = await getPlaylist(token);

      playlistdispatch({ type: "USERPLAYLIST", payload: playlists });
    };
    if (JSON.parse(localStorage?.getItem("login"))) {
      const { token } = JSON.parse(localStorage?.getItem("token"));
      getplaylists(token);
    }
  }, []);

  const AddToPlaylist = (state, playlistName, id) => {
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
    return [
      ...state,
      {
        name: playlistName,
        id: [id],
      },
    ];
  };

  const TogglePlaylistVideo = (state, playlistName, id) => {
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
    switch (value.type) {
      case "USERPLAYLIST":
        return value.payload;

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
