import { theme } from "native-base";

export const Styles: Record<string, unknown> = {
  button: {
    marginTop: 10,
    backgroundColor: theme.colors.purple["500"],
  },
  errors: {
    marginTop: -10,
    marginBottom: 5,
    color: theme.colors.error["500"],
  },
  heading: {
    fontWeight: "600",
    color: theme.colors.coolGray["800"],
    fontSize: theme.fontSizes.md,
  },
};
