import { theme } from "native-base";

export const Styles: Record<string, unknown> = {
  button: {
    marginTop: 10,
    backgroundColor: theme.colors.purple["500"],
  },
  buttonHeading: {
    fontWeight: "500",
    color: theme.colors.muted["700"],
    fontSize: theme.fontSizes.xs,
    marginBottom: 10,
  },
  errors: {
    marginTop: -10,
    marginBottom: 5,
    color: theme.colors.error["500"],
  },
  smallHeading: {
    fontWeight: "500",
    color: theme.colors.coolGray["600"],
    fontSize: theme.fontSizes.sm,
  },
  welcomeHeading: {
    fontSize: theme.fontSizes["3xl"],
    fontWeight: "600",
    color: theme.colors.coolGray["800"],
  },
};
