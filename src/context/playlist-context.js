import { createContext, useContext, useReducer } from "react";
import useVideos from "./playlist-context";
import allVideos from "../data/videos";
const PlaylistContainer = createContext();

export default function usePlaylist() {
  return useContext(PlaylistContainer);
}

export function PlaylistProvider({ children }) {
  // const { videos } = useVideos();
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
      name: "Gym Workouts",
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
