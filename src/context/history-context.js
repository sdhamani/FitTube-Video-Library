import { createContext, useContext, useReducer } from "react";

const HistoryContainer = createContext();

export default function useHistory() {
  return useContext(HistoryContainer);
}

export function HistoryProvider({ children }) {
  const dispatchfunc = (state, value) => {
    switch (value.type) {
      case "ADDTOHISTORY":
        return [...state, value.payload];
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
