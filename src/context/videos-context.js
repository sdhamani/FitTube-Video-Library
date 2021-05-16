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
  const [allVideos, setallVideos] = useState([]);

  useEffect(() => {
    async function fecthVideos() {
      const response = await GetVideos();
      if (response.success) {
        setData(response.videos);
      } else {
        console.log(response.data.message);
      }
    }

    fecthVideos();
  }, []);

  const dispatchfunc = (state, value) => {
    const searchText = value.PAYLOAD.toLowerCase();
    switch (value.TYPE) {
      case "SEARCH":
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

  const [videos, videosdispatch] = useReducer(dispatchfunc, data);

  return (
    <VideosContainer.Provider
      value={{ videos: data, videosdispatch: videosdispatch }}
    >
      {children}
    </VideosContainer.Provider>
  );
}
