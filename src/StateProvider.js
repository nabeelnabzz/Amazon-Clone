import React, { createContext, useContext, useReducer} from "react";

//Prepere the dataLayer
export const StateContext = createContext();

//Wrap our app and provide the dataLayer
export const StateProvider =( {reducer, initialState, children}) => (    
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
        );

//Pull information from the dataLayer
export const useStateValue = () => useContext(StateContext);        
    