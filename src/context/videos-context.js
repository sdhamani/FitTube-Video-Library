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
  let sabVideos = [];
  useEffect(() => {
    async function fecthproducts() {
      const response = await GetVideos();
      console.log("response", response);
      if (response.success) {
        sabVideos = response.Videos;
        setData(response.Videos);
      } else {
        console.log(response.data.message);
      }
    }
    fecthproducts();
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

  const [videos, videosdispatch] = useReducer(dispatchfunc, allVideos);
  console.log("sabVideos", sabVideos);
  return (
    <VideosContainer.Provider
      value={{ videos: sabVideos, videosdispatch: videosdispatch }}
    >
      {children}
    </VideosContainer.Provider>
  );
}
