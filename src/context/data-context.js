import { createContext, useContext } from "react";

import { useState } from "react";

const DataContainer = createContext();

export default function useData() {
  return useContext(DataContainer);
}

export function DataProvider({ children }) {
  const [data, setData] = useState([]);

  return (
    <DataContainer.Provider value={{ data: data, setData: setData }}>
      {children}
    </DataContainer.Provider>
  );
}
