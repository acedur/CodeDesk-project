import CardContext from "./CardContext";

import { useState } from "react";

const CardState = ({ children }) => {
  const [filter, setFilter] = useState("Home");

  return (
    <CardContext.Provider
      value={{
        filter,
        setFilter,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardState;
