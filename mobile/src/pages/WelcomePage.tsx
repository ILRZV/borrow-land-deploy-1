import React from "react";
import { useCallback, useContext } from "react";
import { Box, Stack, Heading } from "native-base";
import PrimaryButton from "../components/PrimaryButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CredentialsContext } from "../components/CredentialsContext";
import { BORROWLAND_CREDENTIALS } from "./store/credentialConst";

export default function WelcomePage({ navigation }) {
  const { setStoredCredentials } = useContext(CredentialsContext);

  useCallback(
    () =>
      AsyncStorage.getItem(BORROWLAND_CREDENTIALS)
        .then(() => {
          setStoredCredentials("");
        })
        .catch((error) => {
          return error.data;
        }),
    []
  );

  const navigateToRegistration = useCallback(
    () => navigation.navigate("RegistrationPage"),
    []
  );
  const navigateToLogin = useCallback(
    () => navigation.navigate("LoginPage"),
    []
  );
  return (
    <Box safeArea flex={1} p="6" py="9" w="90%" mx="auto">
      <Heading paddingBottom={60} p="3" mx="auto">
        Welcome to
        <Heading color="purple.800"> BorrowLand </Heading>
      </Heading>
      <Stack space={3}>
        <PrimaryButton text="Register" onPress={navigateToRegistration} />
        <PrimaryButton text="Log In" onPress={navigateToLogin} />
      </Stack>
    </Box>
  );
}
