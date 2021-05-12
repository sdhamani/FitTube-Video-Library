import { createContext, useContext, useReducer } from "react";
import useVideos from "./playlist-context";
import allVideos from "../data/videos";
const PlaylistContainer = createContext();

export default function usePlaylist() {
  return useContext(PlaylistContainer);
}

export function PlaylistProvider({ children }) {
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
    let { id, playlistName, videoId, newName } = value.PAYLOAD;

    switch (value.TYPE) {
      case "CREATE":
        return state && state.find((item) => item.name === playlistName)
          ? AddToPlaylist(state, playlistName, id)
          : CreatePlaylist(state, playlistName, id);
      case "TOGGLE":
        return TogglePlaylistVideo(state, playlistName, id);
      case "REMOVE":
        return state.map((playlist) => {
          if (playlist.playlistId === id) {
            const UpdatedPlaylist = playlist.id.filter(
              (item) => item !== videoId
            );

            playlist.id = UpdatedPlaylist;
          }
          return playlist;
        });
      case "UPDATENAME":
        return state.map((playlist) => {
          if (playlist.playlistId === id) {
            playlist.name = newName;
          }
          return playlist;
        });
      default:
        return state;
    }
  };

  const getId = (category) => {
    const filteredArray = allVideos.filter(
      (item) => item.cateogory === category
    );
    return filteredArray.map((item) => item.id);
  };
  const intialPlaylist = [
    {
      playlistId: 2,
      name: "Yoga",
      id: getId("yoga"),
    },
    {
      playlistId: 3,
      name: "Cardio",
      id: getId("cardio"),
    },
    {
      playlistId: 1,
      name: "Zumba",
      id: getId("zumba"),
    },
    {
      playlistId: 4,
      name: "Aerobics",
      id: getId("aerobics"),
    },

    {
      playlistId: 5,
      name: "Fat Burning",
      id: getId("fat burning"),
    },
    {
      playlistId: 6,
      name: "Home Workout",
      id: getId("Home Workout"),
    },
    {
      playlistId: 7,
      name: "Gym Workout",
      id: getId("gym"),
    },
  ];
  const [playlist, playlistdispatch] = useReducer(
    playlistdisptachFun,
    intialPlaylist
  );
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
