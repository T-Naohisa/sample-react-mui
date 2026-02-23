import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AuthProvider } from "./contexts/AuthContext";
const theme = createTheme({
  palette: {
    primary: {
      main: "#6ebad3",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#e69b56",
    },
    background: {
      default: "#f0f4f7",
      paper: "#ffffff",
    },
    text: {
      primary: "#2c3e50",
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* ログイン情報を使いまわせるようにする */}
        <AuthProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
