import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TopNavigator from "../RequestPage/TopNavigator";
import ProfilePage from "../ProfilePage";
import MyToolsPage from "../MyToolsPage";
import { TAB_ICONS } from "./tabIcons";
import themeStyle from "../../styles/theme.style";
import { Box, Button } from "native-base";
import { Styles } from "./styles";
import { useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CredentialsContext } from "../../components/CredentialsContext";
import { Dimensions, View } from "react-native";
import { BORROWLAND_CREDENTIALS } from "../store/credentialConst";

const { width, height } = Dimensions.get("window");
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const navigateToNotificationPage = useCallback(
    () => alert("Here will be Notifications Page"),
    []
  );
  const navigateToChatPage = useCallback(
    () => alert("Here will be Chat Page"),
    []
  );
  const { setStoredCredentials } = useContext(CredentialsContext);

  const logOut = () => {
    AsyncStorage.removeItem(BORROWLAND_CREDENTIALS)
      .then(() => {
        setStoredCredentials("");
      })
      .catch((error) => error.data);
  };

  return (
    <View
      style={{
        width,
        height,
      }}
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused
              ? TAB_ICONS[route.name]
              : `${TAB_ICONS[route.name]}-outline`;
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerRight: () => (
            <Box style={Styles.headerRight}>
              <Button
                style={Styles.button}
                onPress={navigateToNotificationPage}
              >
                <Ionicons name="ios-notifications-outline" size={21} />
              </Button>
              <Button style={Styles.button} onPress={navigateToChatPage}>
                <Ionicons name="chatbox-outline" size={20} />
              </Button>
              <Button style={Styles.button} onPress={logOut}>
                <Ionicons name="ios-log-out-outline" size={20} />
              </Button>
            </Box>
          ),
          tabBarActiveTintColor: themeStyle.colors.PRIMARY_COLOR,
          tabBarInactiveTintColor: themeStyle.colors.SECONDARY_COLOR,
        })}
      >
        <Tab.Screen name="Requests" component={TopNavigator} />
        <Tab.Screen name="MyTools" component={MyToolsPage} />
        <Tab.Screen name="Profile" component={ProfilePage} />
      </Tab.Navigator>
    </View>
  );
}
