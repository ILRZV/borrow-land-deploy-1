import { Button, Icon } from "native-base";
import { Box, Input } from "native-base";
import React from "react";
import { Styles } from "./styles";
import themeStyle from "../../styles/theme.style";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";

export default function SearchBar() {
  return (
    <Box style={Styles.searchWrapper}>
      <Box style={Styles.inputWrapper}>
        <Input
          style={Styles.input}
          placeholder="Search"
          borderColor={themeStyle.colors.BORDER_COLOR}
          _focus={{ borderColor: themeStyle.colors.IN_FOCUS }}
          InputLeftElement={
            <Icon
              style={Styles.inputIcon}
              as={<MaterialIcons name="search" />}
            />
          }
        />
      </Box>
      <Button
        style={Styles.filterButton}
        variant="outline"
        colorScheme="coolGray"
      >
        <Icon
          style={Styles.filterIcon}
          size="6"
          as={<MaterialIcons name="filter-alt" />}
        />
      </Button>
    </Box>
  );
}
