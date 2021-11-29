import React, { useState } from "react";
import MainStack from "./src/navigation";
import { NativeBaseProvider, theme } from "native-base";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CredentialsContext } from "./src/components/CredentialsContext";
import { BORROWLAND_CREDENTIALS } from "./src/pages/store/credentialConst";

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState("");

  const checkLoginCredentials = (): Promise<void> => {
    return AsyncStorage.getItem(BORROWLAND_CREDENTIALS)
      .then((result) => {
        setStoredCredentials(JSON.parse(result));
        JSON.parse(null);
      })
      .catch((error) => {
        return error.data;
      });
  };
  if (!appReady) {
    return (
      <AppLoading
        startAsync={checkLoginCredentials}
        onError={console.warn}
        onFinish={() => setAppReady(true)}
      />
    );
  }
  return (
    <CredentialsContext.Provider
      value={{ storedCredentials, setStoredCredentials }}
    >
      <NativeBaseProvider theme={theme}>
        <MainStack />
      </NativeBaseProvider>
    </CredentialsContext.Provider>
  );
}
