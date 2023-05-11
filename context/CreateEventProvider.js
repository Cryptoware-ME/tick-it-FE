import { createContext, useContext } from "react";
import React, { useState, useEffect } from "react";
const CreateEventContext = createContext();

export const useCreateEventContext = () => {
  const context = useContext(CreateEventContext);
  return context;
};

export const CreateEventProvider = ({ children }) => {
  const [eventValues, setEventValues] = useState();

  useEffect(() => {
    console.log("eventValues: ", eventValues);
  }, [eventValues]);
  return (
    <CreateEventContext.Provider
      value={{
        eventValues,
        setEventValues,
      }}
    >
      {children}
    </CreateEventContext.Provider>
  );
};
