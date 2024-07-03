import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Ubuntu"
  },
  palette: {
    primary: {
      light: "#F9FAFA",
      main:  "#D7C7F4",
      dark:  "#9785BA",
      bg:  "#9785BA",
    },
  },
});

export default theme;
