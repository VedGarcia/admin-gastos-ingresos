import { createContext } from "react";

export const Context = createContext()

export const Globalprovider = ({children}) => {
    return(
        <Context.provider value={{total: 100}}>

            {children}

        </Context.provider>
    )
}