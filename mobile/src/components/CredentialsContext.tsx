import { createContext, SetStateAction } from "react";

export const CredentialsContext = createContext({
  storedCredentials: {},
  setStoredCredentials: (_active: SetStateAction<string>) => {},
})
