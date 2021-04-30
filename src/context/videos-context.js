import { createContext, useContext, useReducer } from "react";
import allVideos from "../data/videos";

const VideosContainer = createContext();

export default function useVideos() {
  return useContext(VideosContainer);
}

export function VideosProvider({ children }) {
  const dispatchfunc = (state, value) => {
    console.log({ state }, { value });
    const searchText = value.PAYLOAD.toLowerCase();
    switch (value.TYPE) {
      case "SEARCH":
        if (searchText !== "") {
          return state.filter((item) => {
            const itemName = item.name.toLowerCase();

            console.log(itemName);
            console.log(itemName.includes(searchText));
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
