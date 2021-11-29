import React, { useState } from "react";
import { Dimensions, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Styles } from "./styles";
import MyRequestsPage from "./MyRequestsPage";
import AllRequestsPage from "./AllRequestsPage";
import { ROUTE_CONSTS } from "./routeConsts";

const initialLayout = { width: Dimensions.get("window").width };

const renderScene = SceneMap({
  first: MyRequestsPage,
  second: AllRequestsPage,
});

const routes = [
  { key: ROUTE_CONSTS.FIRST_KEY, title: ROUTE_CONSTS.MY_REQUESTS_TITLE },
  { key: ROUTE_CONSTS.SECOND_KEY, title: ROUTE_CONSTS.ALL_REQUESTS_TITLE },
];

export default function TopNavigator() {
  const [index, setIndex] = useState(0);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          style={Styles.tabBar}
          renderLabel={({ route, focused }) => (
            <Text
              style={[
                focused ? Styles.activeTabTextColor : Styles.tabTextColor,
              ]}
            >
              {route.title}
            </Text>
          )}
          indicatorStyle={Styles.indicator}
        />
      )}
    />
  );
}
