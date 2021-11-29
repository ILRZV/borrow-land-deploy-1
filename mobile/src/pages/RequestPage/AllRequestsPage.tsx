import React from "react";
import { Text, Box } from "native-base";
import { Styles } from "./styles";
import SearchBar from "./SearchBar";

export default function AllRequestsPage() {
  return (
    <Box safeAreaTop={1} flex={3} w="95%" mx="auto">
      <SearchBar />
      <Text style={Styles.allRequests} fontWeight="semibold">
        No requests were found
      </Text>
    </Box>
  );
}
