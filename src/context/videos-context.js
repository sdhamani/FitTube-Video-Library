import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import GetVideos from "../api/videos-api";
import useData from "../context/data-context";
// import allVideos from "../data/videos";

const VideosContainer = createContext();

export default function useVideos() {
  return useContext(VideosContainer);
}

export function VideosProvider({ children }) {
  const { data, setData } = useData();

  useEffect(() => {
    async function fecthVideos() {
      const response = await GetVideos();
      console.log("res", { response });
      if (response.success) {
        console.log("dispcalled", response.videos);
        videosdispatch({ TYPE: "ALLVIDEOS", PAYLOAD: response.videos });
        setData(response.videos);
      } else {
        console.log(response.data.message);
      }
    }

    fecthVideos();
  }, []);

  const dispatchfunc = (state, value) => {
    switch (value.TYPE) {
      case "ALLVIDEOS":
        return value.PAYLOAD;
      case "SEARCH":
        const searchText = value.PAYLOAD.toLowerCase();

        if (searchText !== "") {
          const updatedState = state.filter((item) => {
            const itemName = item.name.toLowerCase();

            return itemName.includes(searchText);
          });
          setData(updatedState);
          return state;
        } else {
          setData(state);
          return state;
        }
      default:
        return state;
    }
  };

  const [videos, videosdispatch] = useReducer(dispatchfunc, []);

  return (
    <VideosContainer.Provider
      value={{ videos: videos, videosdispatch: videosdispatch }}
    >
      {children}
    </VideosContainer.Provider>
  );
}
