import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ReceiveCode from "./pages/ReceiveCode";
import NewPasswordPage from "./pages/NewPasswordPage";
import BottomTabNavigator from "./pages/BottomTabNavigator";
import NewRequestPage from "./pages/RequestPage/NewRequestPage";
import { CredentialsContext } from "./components/CredentialsContext";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <CredentialsContext.Consumer>
      {({ storedCredentials }) => (
        <NavigationContainer>
          <Stack.Navigator>
            {storedCredentials ? (
              <Stack.Screen
                name="BottomTabNavigator"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
              />
            ) : (
              <>
                <Stack.Screen
                  name="Welcome"
                  component={WelcomePage}
                  options={{ headerShown: false }}
                />
                <Stack.Screen name="LoginPage" component={LoginPage} />
                <Stack.Screen
                  name="RegistrationPage"
                  component={RegistrationPage}
                />
              </>
            )}
            <Stack.Screen name="ReceiveCode" component={ReceiveCode} />
            <Stack.Screen name="NewPasswordPage" component={NewPasswordPage} />
            <Stack.Screen name="New Request" component={NewRequestPage} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </CredentialsContext.Consumer>
  );
}
