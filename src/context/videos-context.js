import { createContext, useContext, useReducer } from "react";
import allVideos from "../data/videos";

const VideosContainer = createContext();

export default function useVideos() {
  return useContext(VideosContainer);
}

export function VideosProvider({ children }) {
  const dispatchfunc = (state, value) => {
    const searchText = value.PAYLOAD.toLowerCase();
    switch (value.TYPE) {
      case "SEARCH":
        console.log("search", state);
        if (searchText !== "") {
          state = allVideos;
          return state.filter((item) => {
            const itemName = item.name.toLowerCase();

            return itemName.includes(searchText);
          });
        } else {
          return allVideos;
        }
      default:
        return state;
    }
  };

  const [videos, videosdispatch] = useReducer(dispatchfunc, allVideos);

  return (
    <VideosContainer.Provider
      value={{ videos: videos, videosdispatch: videosdispatch }}
    >
      {children}
    </VideosContainer.Provider>
  );
}
