import { createContext, useContext, useReducer } from "react";

const WatchLaterContainer = createContext();

export default function useWatchLater() {
  return useContext(WatchLaterContainer);
}
export function WatchLaterProvider({ children }) {
  const dispatchfunc = (state, value) => {
    console.log({ state }, { value });
    let inWatchLater = state.find((item) => item === value.payload);
    switch (value.type) {
      case "WATCHLATER":
        return inWatchLater
          ? state.filter((item) => item !== value.payload)
          : [...state, value.payload];
      default:
        return state;
    }
  };

  const [watchLater, watchLaterDispatch] = useReducer(dispatchfunc, []);
  return (
    <WatchLaterContainer.Provider
      value={{ watchLater: watchLater, watchLaterDispatch: watchLaterDispatch }}
    >
      {children}
    </WatchLaterContainer.Provider>
  );
}
