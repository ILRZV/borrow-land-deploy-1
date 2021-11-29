import React, { useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { Styles } from "./styles";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function ButtonRequest({ navigation }) {
  navigation = useNavigation();
  const navigateToNewRequest = useCallback(
    () => navigation.navigate("New Request"),
    []
  );
  return (
    <TouchableOpacity onPress={navigateToNewRequest} style={Styles.roundButton}>
      <Icon name="add" />
    </TouchableOpacity>
  );
}
