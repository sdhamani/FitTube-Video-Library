import { createContext, useContext, useReducer } from "react";
import allVideos from "../data/videos";

const VideosContainer = createContext();

export default function useVideos() {
  return useContext(VideosContainer);
}

export function VideosProvider({ children }) {
  const dispatchfunc = (state, value) => {
    console.log({ state }, { value });
  };

  console.log("allVideos", allVideos);
  const [videos, videosdispatch] = useReducer(dispatchfunc, allVideos);
  console.log("videos", videos);

  return (
    <VideosContainer.Provider
      value={{ videos: videos, videosdispatch: videosdispatch }}
    >
      {children}
    </VideosContainer.Provider>
  );
}
