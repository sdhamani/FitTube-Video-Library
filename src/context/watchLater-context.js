import { createContext, useContext, useEffect, useReducer } from "react";
import getWatchVideos from "../api/watchlater-api";

const WatchLaterContainer = createContext();

export default function useWatchLater() {
  return useContext(WatchLaterContainer);
}
export function WatchLaterProvider({ children }) {
  const dispatchfunc = (state, value) => {
    switch (value.type) {
      case "WATCHLATER":
        return value.payload;
      default:
        return state;
    }
  };

  useEffect(() => {
    const getwatchlater = async (token) => {
      const watchLater = await getWatchVideos(token);

      watchLaterDispatch({
        type: "WATCHLATER",
        payload: watchLater,
      });
    };
    if (JSON.parse(localStorage?.getItem("login"))) {
      const { token } = JSON.parse(localStorage?.getItem("token"));
      getwatchlater(token);
    }
  }, []);

  const [watchLater, watchLaterDispatch] = useReducer(dispatchfunc, []);
  return (
    <WatchLaterContainer.Provider
      value={{ watchLater: watchLater, watchLaterDispatch: watchLaterDispatch }}
    >
      {children}
    </WatchLaterContainer.Provider>
  );
}
