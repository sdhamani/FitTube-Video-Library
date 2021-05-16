import { createContext, useContext, useEffect, useReducer } from "react";
import getLikeVideos from "../api/likevideos-api";

const LikedVideosContainer = createContext();

export default function useLikedVideos() {
  return useContext(LikedVideosContainer);
}

export function LikedVideosProvider({ children }) {
  useEffect(() => {
    const getplaylists = async (token) => {
      const likedVideos = await getLikeVideos(token);

      likevideosdispatch({ type: "LIKEVIDEOS", payload: likedVideos });
    };
    if (JSON.parse(localStorage?.getItem("login"))) {
      const { token } = JSON.parse(localStorage?.getItem("token"));
      getplaylists(token);
    }
  }, []);

  const dispatchfunc = (state, value) => {
    switch (value.type) {
      case "LIKEVIDEOS":
        return value.payload;

      default:
        return state;
    }
  };

  const [likevideos, likevideosdispatch] = useReducer(dispatchfunc, []);

  return (
    <LikedVideosContainer.Provider
      value={{
        likevideos: likevideos,
        likevideosdispatch: likevideosdispatch,
      }}
    >
      {children}
    </LikedVideosContainer.Provider>
  );
}
