import { createContext, useContext, useReducer } from "react";

const LikedVideosContainer = createContext();

export default function useLikedVideos() {
  return useContext(LikedVideosContainer);
}

export function LikedVideosProvider({ children }) {
  const dispatchfunc = (state, value) => {
    console.log({ state }, { value });
    let isVideoLiked = state.find((item) => item === value.payload);
    switch (value.type) {
      case "LIKE":
        return isVideoLiked
          ? state.filter((item) => item !== value.payload)
          : [...state, value.payload];
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
