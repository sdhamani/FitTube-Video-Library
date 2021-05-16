import { createContext, useContext, useEffect, useReducer } from "react";
import getHistory from "../api/history-api";

const HistoryContainer = createContext();

export default function useHistory() {
  return useContext(HistoryContainer);
}

export function HistoryProvider({ children }) {
  useEffect(() => {
    const getplaylists = async (token) => {
      const history = await getHistory(token);

      historydispatch({ type: "USERHISTORY", payload: history });
    };
    if (JSON.parse(localStorage?.getItem("login"))) {
      const { token } = JSON.parse(localStorage?.getItem("token"));
      getplaylists(token);
    }
  }, []);

  const dispatchfunc = (state, value) => {
    switch (value.type) {
      case "USERHISTORY":
        return value.payload;
      default:
        return state;
    }
  };

  const [history, historydispatch] = useReducer(dispatchfunc, []);

  return (
    <HistoryContainer.Provider
      value={{ history: history, historydispatch: historydispatch }}
    >
      {children}
    </HistoryContainer.Provider>
  );
}
