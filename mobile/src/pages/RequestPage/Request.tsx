import { Text } from "native-base";
import { Box, HStack, VStack, Image, Spacer, Center } from "native-base";
import React from "react";
import { Styles } from "./styles";

type RequestProps = {
  item: {
    imageUrl?: string;
    id: string;
    fullName: string;
    recentText: string;
    timeStamp: string;
  };
};

export default function Request({ item }: RequestProps) {
  return (
    <Box paddingBottom="5">
      <Box style={Styles.elementBox}>
        <Box flex={3}>
          <Text style={Styles.timeStamp}>{item.timeStamp}</Text>
          <Center style={Styles.label}>Active</Center>
        </Box>
        <HStack space={2} style={Styles.HStack}>
          <Image
            size="110px"
            source={{
              uri: item.imageUrl,
            }}
            alt="Tool"
          />
          <VStack>
            <Text style={Styles.itemName} bold>
              {item.fullName}
            </Text>
            <Text style={Styles.recentText}>{item.recentText}</Text>
          </VStack>
          <Spacer />
        </HStack>
      </Box>
    </Box>
  );
}
