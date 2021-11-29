import React from "react";
import { Box, FlatList } from "native-base";
import { REQUESTS_DATA } from "./requestsData";
import Request from "./Request";
import SearchBar from "./SearchBar";
import ButtonRequest from "./ButtonRequest";

export default function MyRequestsPage({ navigation }) {
  return (
    <Box safeAreaTop={1} flex={3} w="95%" mx="auto">
      <SearchBar />
      <FlatList
        data={REQUESTS_DATA}
        renderItem={({ item }) => <Request item={item} />}
        keyExtractor={(item) => item.id}
      />
      <ButtonRequest navigation={navigation} />
    </Box>
  );
}
