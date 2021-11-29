import { theme } from "native-base";
import themeStyle from "../../styles/theme.style";

export const Styles: Record <string, unknown> = {
  activeTabTextColor: {
    color: themeStyle.colors.PRIMARY_COLOR,
  },
  allRequests: {
    top: "40%",
    left: "30%",
  },
  elementBox: {
    backgroundColor: theme.colors.white,
    borderColor: themeStyle.colors.BORDER_COLOR,
    borderWidth: 1,
    paddingLeft: 12,
    paddingRight: 10,
    paddingTop: 40,
    paddingBottom: 40,
  },
  tabTextColor: {
    color: themeStyle.colors.SECONDARY_COLOR,
  },
  tabBar: {
    backgroundColor: themeStyle.colors.TAB_BAR,
  },
  timeStamp: {
    alignSelf: "flex-end",
    bottom: 25,
    color: themeStyle.colors.PRIMARY_TEXT,
    fontSize: theme.fontSizes.xs,
  },
  label: {
    borderRadius: 3,
    backgroundColor: themeStyle.colors.ACTIVE,
    bottom: 28,
    position: "absolute",
    marginLeft: -12,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 6,
    paddingBottom: 6,
  },
  HStack: {
    justifyContent: "space-between",
  },
  itemName: {
    color: themeStyle.colors.PRIMARY_TEXT,
    width: "40%",
  },
  recentText: {
    color: themeStyle.colors.SECONDARY_TEXT,
  },
  searchWrapper: {
    flexDirection: "row",
    height: "6.5%",
    justifyContent: "space-between",
    marginBottom: 25,
    top: 5,
  },
  indicator: {
    backgroundColor: themeStyle.colors.PRIMARY_COLOR,
  },
  inputWrapper: {
    width: "87%",
  },
  input: {
    fontSize: theme.fontSizes.md,
  },
  inputIcon: {
    color: themeStyle.colors.ICON,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 8,
  },
  filterButton: {
    borderColor: themeStyle.colors.BORDER_COLOR,
    height: 30,
    marginTop: 8,
    width: 40,
  },
  filterIcon: {
    color: themeStyle.colors.ICON,
  },
  roundButton: {
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: themeStyle.colors.PRIMARY_COLOR,
    borderRadius: 100,
    bottom: 20,
    height: 50,
    justifyContent: "center",
    padding: 10,
    position: "absolute",
    right: 15,
    width: 50,
  },
};
