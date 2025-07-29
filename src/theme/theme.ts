import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#f50057" }
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    h1: { fontSize: "3rem", fontWeight: 700 },
    h2: { fontSize: "2.25rem", fontWeight: 600 },
    body1: { fontSize: "1rem", lineHeight: 1.6 }
  }
});

export default theme;